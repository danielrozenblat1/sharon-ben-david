import styles from './When.module.css';

export function When() {
  return (
    <div className={styles.when}>
        <p className={styles.title}>צור איתי קשר גם ב</p>
      <p className={styles.email}>
        <a href="mailto:bendavidsa@gmail.com">bendavidsa@gmail.com</a>
      </p>
      <p className={styles.phone}>
        <a href="tel:052-753-3434">052-753-3434</a>
      </p>
      <p className={styles.location}>מיקום - גן יבנה</p>
    </div>
  );
}