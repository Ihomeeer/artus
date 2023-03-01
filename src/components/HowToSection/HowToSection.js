import React from "react";
import styles from './HowToSection.module.css';
import HowToBlock from "../HowToBlock/HowToBlock";
import firsIconPath from '../../images/HowToIcons/icon1.svg';
import secondIconPath from '../../images/HowToIcons/icon2.svg';
import thirdIconPath from '../../images/HowToIcons/icon3.svg';
import fourthIconPath from '../../images/HowToIcons/icon4.svg';

function HowToSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>
        Как работает веб-комплекс "Интеграл"
      </h2>
      <ul className={styles.list}>
        <HowToBlock
          title="Определение местоположения участка"
          text="Заказчик указывает местоположение участка на карте или находит по кадастровому номеру"
          iconPath={firsIconPath}
        />
        <HowToBlock
          title="Запрос параметров"
          text="Заказчик выбирает интересующие его параметры в пользовательской оболочке веб-комплекса"
          iconPath={secondIconPath}
        />
        <HowToBlock
          title="Соединение с базой данных почвенного Дата-Центра"
          text="Веб-комплекс на основе введенных данных производит запрос информации из базы дата-центра для дальнейшего анализа посредством разработанных нами алгоритмов"
          iconPath={thirdIconPath}
        />
        <HowToBlock
          title="Расчет параметров и создание отчета"
          text="Собранная информация обрабатывается алгоритмами интеллектуального анализа больших данных и возвращает информацию в виде готового отчета"
          iconPath={fourthIconPath}
        />
      </ul>
    </section>
  )
}

export default HowToSection;