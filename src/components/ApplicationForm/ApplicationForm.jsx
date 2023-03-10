import styles from './ApplicationForm.module.css';
import React from 'react';

function ApplicationForm({ title, buttonTitle }) {
  return (
    <form className={styles.formContainer}>
      <h3 className={styles.title}>
        {title}
      </h3>



      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>ИМЯ</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Имя"
        />
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>ЭЛЕКТРОННАЯ ПОЧТА</label>
        <input
          className={styles.input}
          type="email"
          placeholder="E-mail"
        />
      </div>

      <button className={styles.button}>{buttonTitle}</button>

      <p className={styles.sign}>И мы с вами свяжемся </p>
    </form>
  )
}

export default ApplicationForm;