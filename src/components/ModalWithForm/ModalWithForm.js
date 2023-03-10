import styles from './ModalWithForm.module.css';
import cx from 'classnames';
import React from "react";

function ModalWithForm({ children, reversed, modalText, color, textColor }) {

  const modalStyle = {
    background: color,
  };

  const textStyle = {
    color: textColor && textColor,
  }

  return (
    <div style={color && modalStyle} className={cx(styles.modalContainer, reversed === true ? styles.reversedContainer : styles.regularContainer)}>
      <p style={textColor && textStyle} className={cx(styles.text, reversed ? styles.textCenter : '')}>{modalText}</p>
      {children}
    </div>
  )
}

export default ModalWithForm;