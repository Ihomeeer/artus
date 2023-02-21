import styles from './PromoIcon.module.css';
import React from 'react';

function PromoIcon({ imgSrc, text }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imgSrc} alt={text} />
      <p className={styles.textInfo}>{text}</p>
    </div>
  )
}

export default PromoIcon;