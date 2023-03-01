import styles from './Promo.module.css';
import React from 'react';
import PromoIcon from '../PromoIcon/PromoIcon';
import firstIconPath from '../../images/icon1.svg';
import secondIconPath from '../../images/icon2.svg';
import thirdIconPath from '../../images/icon3.svg';

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
            text="Оценка нормативной урожайности и интегрального показателя плодородия на вашем участке"
          />
        </li>

        <li>
          <PromoIcon
            imgSrc={thirdIconPath}
            text="Проведение обследований в случае необходимости  максимально детализированного отчета"
          />
        </li>

        <li>
          <PromoIcon
            imgSrc={secondIconPath}
            text="Доступ к данным уникальной базы обследований земель сельхозназначения за 70 и более лет"
          />
        </li>
      </ul>

      <button className={styles.checkButton}>Проверить свой участок</button>
    </section>
  )
}

export default Promo;