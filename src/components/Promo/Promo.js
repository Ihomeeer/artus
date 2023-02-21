import styles from './Promo.module.css';
import React from 'react';
import PromoIcon from '../PromoIcon/PromoIcon';
import firstIconPath from '../../images/icon1.svg';


function Promo() {
  return (
    <section className={styles.section}>

      <h1 className={styles.header}>
        ООО "ARTUS"
      </h1>

      <p className={styles.about}>
        Веб-комплекс "Интеграл" - интеллектуальное решение для управления земельными ресурсами
      </p>

      <ul className={styles.iconsContainer}>
        <li>
          <PromoIcon
            imgSrc={firstIconPath}
            text="тест"
          />
        </li>
      </ul>

      <button className={styles.checkButton}>Проверить свой участок</button>
    </section>
  )
}

export default Promo;