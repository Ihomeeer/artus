import React from "react";
import styles from './HowToBlock.module.css';

function HowToBlock({ title, text, iconPath }) {
  return (
    <li className={styles.block}>
      <div className={styles.headerContainer}>
        <img className={styles.image} src={iconPath} alt={title} />
        <h3 className={styles.header}>
          {title}
        </h3>
      </div>
      <p className={styles.text}>
        {text}
      </p>
    </li>
  )
}

export default HowToBlock;