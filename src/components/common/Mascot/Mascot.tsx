import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../../../i18n/useLanguage'
import { ChibiArt } from './ChibiArt'
import styles from './Mascot.module.scss'

const STORAGE_KEY = 'mascotPos'
const MARGIN = 8
const DEFAULT_OFFSET = 24
const DRAG_THRESHOLD = 4
const KEY_STEP = 24

type Pos = { x: number; y: number }

function loadPos(): Pos | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const p = JSON.parse(raw)
    if (typeof p?.x === 'number' && typeof p?.y === 'number') return { x: p.x, y: p.y }
  } catch {
    // ignore
  }
  return null
}

function savePos(pos: Pos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pos))
  } catch {
    // ignore
  }
}

/** Ширина видимой области без полосы прокрутки */
function viewportWidth() {
  return document.documentElement.clientWidth || window.innerWidth
}

function clamp(pos: Pos, el: HTMLElement | null): Pos {
  const w = el?.offsetWidth ?? 104
  const h = el?.offsetHeight ?? 130
  return {
    x: Math.min(Math.max(MARGIN, pos.x), Math.max(MARGIN, viewportWidth() - w - MARGIN)),
    y: Math.min(Math.max(MARGIN, pos.y), Math.max(MARGIN, window.innerHeight - h - MARGIN)),
  }
}

/** Чиби-талисман: перетаскивается мышью/пальцем/стрелками, по клику «говорит». */
export function Mascot() {
  const { t } = useLanguage()
  const lines = t.mascot.lines

  const ref = useRef<HTMLDivElement>(null)
  const posRef = useRef<Pos | null>(null)
  const drag = useRef<{ dx: number; dy: number; sx: number; sy: number; moved: boolean } | null>(null)
  const bubbleTimer = useRef<number | undefined>(undefined)
  const hopTimer = useRef<number | undefined>(undefined)

  const [pos, setPosState] = useState<Pos | null>(null)
  const [dragging, setDragging] = useState(false)
  const [bubble, setBubble] = useState(false)
  const [hop, setHop] = useState(false)
  const [lineIdx, setLineIdx] = useState(0)

  const setPos = useCallback((next: Pos) => {
    posRef.current = next
    setPosState(next)
  }, [])

  // стартовая позиция: сохранённая или правый нижний угол
  useLayoutEffect(() => {
    const el = ref.current
    const w = el?.offsetWidth ?? 104
    const h = el?.offsetHeight ?? 130
    const start =
      loadPos() ?? { x: viewportWidth() - w - DEFAULT_OFFSET, y: window.innerHeight - h - DEFAULT_OFFSET }
    setPos(clamp(start, el))
  }, [setPos])

  // не вылезать за экран при ресайзе
  useEffect(() => {
    const onResize = () => {
      if (posRef.current) setPos(clamp(posRef.current, ref.current))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [setPos])

  const speak = useCallback(
    (index?: number) => {
      setLineIdx((i) => (index !== undefined ? index : (i + 1) % lines.length))
      setBubble(true)
      setHop(true)
      window.clearTimeout(bubbleTimer.current)
      window.clearTimeout(hopTimer.current)
      bubbleTimer.current = window.setTimeout(() => setBubble(false), 3400)
      hopTimer.current = window.setTimeout(() => setHop(false), 650)
    },
    [lines.length],
  )

  // приветствие при появлении
  useEffect(() => {
    const id = window.setTimeout(() => speak(0), 700)
    return () => {
      window.clearTimeout(id)
      window.clearTimeout(bubbleTimer.current)
      window.clearTimeout(hopTimer.current)
    }
  }, [speak])

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || !posRef.current) return
    drag.current = {
      dx: e.clientX - posRef.current.x,
      dy: e.clientY - posRef.current.y,
      sx: e.clientX,
      sy: e.clientY,
      moved: false,
    }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current
    if (!d) return
    if (!d.moved && Math.hypot(e.clientX - d.sx, e.clientY - d.sy) > DRAG_THRESHOLD) {
      d.moved = true
      setDragging(true)
      setBubble(false)
    }
    if (d.moved) setPos(clamp({ x: e.clientX - d.dx, y: e.clientY - d.dy }, ref.current))
  }

  const finishDrag = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current
    if (!d) return
    drag.current = null
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId)
    setDragging(false)
    if (d.moved) {
      if (posRef.current) savePos(posRef.current)
    } else {
      speak()
    }
  }

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      speak()
      return
    }
    const deltas: Record<string, Pos> = {
      ArrowLeft: { x: -KEY_STEP, y: 0 },
      ArrowRight: { x: KEY_STEP, y: 0 },
      ArrowUp: { x: 0, y: -KEY_STEP },
      ArrowDown: { x: 0, y: KEY_STEP },
    }
    const delta = deltas[e.key]
    if (!delta || !posRef.current) return
    e.preventDefault()
    const next = clamp({ x: posRef.current.x + delta.x, y: posRef.current.y + delta.y }, ref.current)
    setPos(next)
    savePos(next)
  }

  const onRight = pos ? pos.x > viewportWidth() / 2 : true
  const below = pos ? pos.y < 96 : false

  const className = [
    styles.mascot,
    dragging ? styles.dragging : '',
    hop ? styles.hop : '',
    pos ? '' : styles.hidden,
  ]
    .filter(Boolean)
    .join(' ')

  const bubbleClass = [
    styles.bubble,
    onRight ? styles.bubbleRight : styles.bubbleLeft,
    below ? styles.bubbleBelow : '',
  ]
    .filter(Boolean)
    .join(' ')

  return createPortal(
    <div
      ref={ref}
      className={className}
      style={pos ? { left: pos.x, top: pos.y } : undefined}
      role="button"
      tabIndex={0}
      aria-label={t.mascot.aria}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onKeyDown={onKeyDown}
    >
      {bubble && (
        <div className={bubbleClass} role="status">
          {lines[lineIdx]}
        </div>
      )}
      <div className={styles.sprite}>
        <ChibiArt />
      </div>
    </div>,
    document.body,
  )
}
