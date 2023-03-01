import React from 'react';
import styles from './InfoBlock.module.css';
import cx from 'classnames';


function InfoBlock({ color, text, header, buttonText, backgroundImage, parity }) {

  const blockStyle = {
    background: color,
  };

  return (
    <div className={cx(styles.section, parity === true ? styles.sectionOdd : styles.sectionEven)}>

      <div style={blockStyle} className={styles.textBlock}>

        <div className={cx(styles.contentWrapper, parity === true ? styles.contentAlignRight : styles.contentAlignLeft)}>
          <h3 className={styles.header}>
            {header}
          </h3>
          <p className={styles.text}>
            {text}
          </p>
          <button className={styles.button}>
            {buttonText}
          </button>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img src={backgroundImage} className={styles.image} alt={buttonText} />
      </div>

    </div>
  )
}

export default InfoBlock;