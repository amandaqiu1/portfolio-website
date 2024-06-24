import React from 'react';
import styles from './Hexagon.module.css';

const Hexagon = ({ onClick, label }) => {
  return (
    <div className={styles.hexagon} onClick={onClick}>
        <span className={styles.label}>{label}</span>
    </div>
  );
};

export default Hexagon;