import React from 'react';
import styles from './NavBar.module.css';



function NavBar() {
  return (
    <nav className={styles.section}>
      <ul className={styles.navigationContainer}>
        <li className={styles.navItem}>
          <a>Об организации</a>
        </li>

        <li className={styles.navItem}>
          <a>Веб-комплекс "Интеграл"</a>
        </li>

        <li className={styles.navItem}>
          <a>Заказать обследование</a>
        </li>

        <li className={styles.navItem}>
          <a>Контакты</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;