import React from 'react';
import styles from './NavBar.module.css';

function NavBar({ aboutRef, contactsRef, handleScroll }) {
  return (
    <nav className={styles.section}>
      <ul className={styles.navigationContainer}>
        <li className={styles.navItem}>
          <button className={styles.button} onClick={() => { handleScroll(aboutRef) }}>Об организации</button>
        </li>

        <li className={styles.navItem}>
          <a className={styles.link} href="#">Веб-комплекс "Интеграл"</a>
        </li>

        <li className={styles.navItem}>
          <a className={styles.link} href="#">Заказать обследование</a>
        </li>

        <li className={styles.navItem}>
          <button className={styles.button} onClick={() => { handleScroll(contactsRef) }}>Контакты</button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;