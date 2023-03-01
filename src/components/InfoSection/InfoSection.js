import React from 'react';
import styles from './InfoSection.module.css';
import InfoBlock from '../InfoBlock/InfoBlock';
import firstInfoSectionBcg from '../../images/sectionBcgs/infoSection1.jpg';
import secondInfoSectionBcg from '../../images/sectionBcgs/infoSection2.jpg';

function InfoSection() {
  return (
    <section className={styles.section}>
      <p className={styles.about}>
        Обследование земельных участков для расширенного отчета и фиксирования состояния земель
      </p>
      <div className={styles.wrapper}>
        <InfoBlock
          color="rgb(24, 148, 109)"
          text='При заключении сделок о передаче прав на земельные участки нередко состояние самих земель "остается за скобками", что приводит к неприятным последствиям в будущем, когда имеются косвенные признаки нанесения вреда почвенному покрову и урожаю. Убедительным доказательством в этом случае может служить документ, удостоверяющий состояние земельных ресурсов участка на момент заключения сделки. '
          header="Собираетесь купить, продать, взять или сдать в аренду земельный участок?"
          buttonText="Подробнее"
          backgroundImage={firstInfoSectionBcg}
          parity={true}
        />
        <InfoBlock
          color="rgb(77, 45, 12)"
          text='При заключении сделок о передаче прав на земельные участки нередко состояние самих земель "остается за скобками", что приводит к неприятным последствиям в будущем, когда имеются косвенные признаки нанесения вреда почвенному покрову и урожаю. Убедительным доказательством в этом случае может служить документ, удостоверяющий состояние земельных ресурсов участка на момент заключения сделки. '
          header="Получите данные о потенциале вашего земельного участка"
          buttonText="Заказать обследование"
          backgroundImage={secondInfoSectionBcg}
          parity={false}
      />
      </div>
    </section>
  )
}

export default InfoSection;