import styles from './Mascot.module.scss'

const INK = '#2b2350'
const SKIN = '#ffe6d6'
const HAIR = '#ff9ccd'
const HAIR_DARK = '#f27bb4'
const SW = 2.5

/**
 * Оригинальная чиби-девочка (авторский дизайн): розовые хвостики, большие глаза,
 * матроска-блузка. Нарисована в SVG, анимации — в Mascot.module.scss.
 */
export function ChibiArt() {
  return (
    <svg
      className={styles.art}
      viewBox="0 0 120 154"
      width="100%"
      role="img"
      aria-hidden="true"
      focusable="false"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* хвостики (позади) */}
      <g className={styles.tailL}>
        <path
          d="M34 50 C14 52 6 82 12 110 C14 118 24 118 26 110 C24 98 28 86 40 74 Z"
          fill={HAIR}
          stroke={INK}
          strokeWidth={SW}
        />
        <path d="M16 96 C16 104 18 110 20 113" fill="none" stroke={HAIR_DARK} strokeWidth="2" />
      </g>
      <g className={styles.tailR}>
        <path
          transform="translate(120 0) scale(-1 1)"
          d="M34 50 C14 52 6 82 12 110 C14 118 24 118 26 110 C24 98 28 86 40 74 Z"
          fill={HAIR}
          stroke={INK}
          strokeWidth={SW}
        />
        <path
          transform="translate(120 0) scale(-1 1)"
          d="M16 96 C16 104 18 110 20 113"
          fill="none"
          stroke={HAIR_DARK}
          strokeWidth="2"
        />
      </g>

      {/* ахоге (торчащая прядь) */}
      <path d="M58 34 C52 18 67 12 69 23" fill="none" stroke={INK} strokeWidth="7" />
      <path d="M58 34 C52 18 67 12 69 23" fill="none" stroke={HAIR} strokeWidth="3.4" />

      {/* волосы сзади */}
      <path
        d="M22 64 C20 26 100 26 98 64 C98 80 92 90 86 94 L34 94 C28 90 22 80 22 64 Z"
        fill={HAIR_DARK}
        stroke={INK}
        strokeWidth={SW}
      />

      {/* ноги и ботинки */}
      <rect x="48" y="134" width="9" height="10" rx="3" fill={SKIN} stroke={INK} strokeWidth="2" />
      <rect x="63" y="134" width="9" height="10" rx="3" fill={SKIN} stroke={INK} strokeWidth="2" />
      <ellipse cx="51" cy="147" rx="8" ry="4.2" fill="#ff7aa8" stroke={INK} strokeWidth="2" />
      <ellipse cx="69" cy="147" rx="8" ry="4.2" fill="#ff7aa8" stroke={INK} strokeWidth="2" />

      {/* юбка */}
      <path d="M42 122 L78 122 L85 137 L35 137 Z" fill="#7a6bd8" stroke={INK} strokeWidth={SW} />
      <path d="M52 124 L50 136 M60 124 L60 136 M68 124 L70 136" stroke={INK} strokeWidth="1.2" opacity="0.5" />

      {/* блузка, воротник, бант */}
      <rect x="44" y="90" width="32" height="34" rx="9" fill="#fff" stroke={INK} strokeWidth={SW} />
      <path d="M49 93 L60 106 L71 93 Z" fill="#5ab7ff" stroke={INK} strokeWidth="2" />
      <path d="M60 106 L53 111 L55 117 L60 112 L65 117 L67 111 Z" fill="#ff3d8b" stroke={INK} strokeWidth="2" />

      {/* руки */}
      <g>
        <ellipse cx="40" cy="108" rx="5" ry="9" transform="rotate(14 40 108)" fill="#fff" stroke={INK} strokeWidth="2" />
        <circle cx="37" cy="118" r="4.2" fill={SKIN} stroke={INK} strokeWidth="2" />
      </g>
      <g className={styles.armR}>
        <ellipse cx="80" cy="108" rx="5" ry="9" transform="rotate(-14 80 108)" fill="#fff" stroke={INK} strokeWidth="2" />
        <circle cx="83" cy="118" r="4.2" fill={SKIN} stroke={INK} strokeWidth="2" />
      </g>

      {/* голова */}
      <ellipse cx="60" cy="64" rx="34" ry="30" fill={SKIN} stroke={INK} strokeWidth={SW} />

      {/* румянец */}
      <ellipse cx="36" cy="77" rx="5.5" ry="3.2" fill="#ff8fb5" opacity="0.55" />
      <ellipse cx="84" cy="77" rx="5.5" ry="3.2" fill="#ff8fb5" opacity="0.55" />

      {/* глаза */}
      <g className={styles.eyes}>
        {[46, 74].map((cx) => (
          <g key={cx}>
            <ellipse cx={cx} cy="66" rx="7" ry="9" fill="#5b4bd6" stroke={INK} strokeWidth="2" />
            <ellipse cx={cx} cy="68" rx="4.6" ry="6.4" fill="#8f7dff" />
            <ellipse cx={cx} cy="67" rx="2.8" ry="4.2" fill={INK} />
            <circle cx={cx - 2.3} cy="62.6" r="2.5" fill="#fff" />
            <circle cx={cx + 2.4} cy="70.6" r="1.2" fill="#fff" />
            <path
              d={`M${cx - 8.5} 62 Q${cx} 53 ${cx + 8.5} 62`}
              fill="none"
              stroke={INK}
              strokeWidth="3"
            />
          </g>
        ))}
      </g>

      {/* рот */}
      <path d="M55 79 Q60 87 65 79 Z" fill="#ff8fa3" stroke={INK} strokeWidth="2" />

      {/* чёлка */}
      <path
        d="M26 60 C24 26 96 26 94 60 Q88 56 84 44 Q78 58 70 50 Q66 60 60 48 Q54 60 50 50 Q42 58 36 44 Q32 56 26 60 Z"
        fill={HAIR}
        stroke={INK}
        strokeWidth={SW}
      />
      <path d="M36 38 Q44 31 54 31" fill="none" stroke="#fff" strokeWidth="3" opacity="0.6" />

      {/* резинки и заколка-звезда */}
      <circle cx="31" cy="52" r="4.6" fill="#5ab7ff" stroke={INK} strokeWidth="2" />
      <circle cx="89" cy="52" r="4.6" fill="#5ab7ff" stroke={INK} strokeWidth="2" />
      <path
        d="M76 32 l2.2 4.6 l5 .7 l-3.6 3.5 l.9 5 l-4.5 -2.4 l-4.5 2.4 l.9 -5 l-3.6 -3.5 l5 -.7 z"
        fill="#ffe27a"
        stroke={INK}
        strokeWidth="1.6"
      />
    </svg>
  )
}
