import styles from "./RoadmapModal.module.scss";

type RoadmapModalProps = {
  open: boolean;
  onClose: () => void;
};

export function RoadmapModal({
  open,
  onClose,
}: RoadmapModalProps) {
  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.close}
          onClick={onClose}
        >
          ×
        </button>

        <h2>Планы развития</h2>

        <p className={styles.description}>
          Портфолио регулярно пополняется новыми коммерческими и pet-проектами.
        </p>

        <div className={styles.section}>
          <h3>Завершённые проекты</h3>

          <ul>
            <li>Users Dashboard</li>
            <li>React Review Form</li>
            <li>API Debug Panel</li>
            <li>Portfolio Website</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>В разработке</h3>

          <ul>
            <li>Коммерческий проект на CS-Cart</li>
            <li>LegiCheck</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Запланировано</h3>

          <ul>
            <li>CRM Dashboard</li>
            <li>Chat с WebSocket</li>
            <li>Интернет-магазин</li>
          </ul>
        </div>

        <p className={styles.footer}>
          Список проектов регулярно обновляется.
        </p>
      </div>
    </div>
  );
}