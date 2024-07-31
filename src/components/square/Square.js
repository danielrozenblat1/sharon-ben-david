import React from 'react';
import styles from './Square.module.css';

const Square = ({ title, description }) => {
  return (
    <div className={styles.square}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Square;