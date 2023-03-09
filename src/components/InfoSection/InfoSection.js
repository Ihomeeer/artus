import React from 'react';
import styles from './InfoSection.module.css';
import InfoBlock from '../InfoBlock/InfoBlock';
import { infoHeaderFirst, infoTextFirst, infoHeaderSecond, infoTextSecond, infoBtnFirst, infoBtnSecond, infoMainHeader } from '../../vendor/data';
import firstInfoSectionBcg from '../../images/sectionBcgs/infoSection1.jpg';
import secondInfoSectionBcg from '../../images/sectionBcgs/infoSection2.jpg';

function InfoSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.about}>
        {infoMainHeader}
      </h2>
      <div className={styles.wrapper}>
        <InfoBlock
          color="rgb(24, 148, 109)"
          text={infoTextFirst}
          header={infoHeaderFirst}
          buttonText={infoBtnFirst}
          backgroundImage={firstInfoSectionBcg}
          parity={true}
        />
        <InfoBlock
          color="rgb(122, 50, 46)"
          text={infoTextSecond}
          header={infoHeaderSecond}
          buttonText={infoBtnSecond}
          backgroundImage={secondInfoSectionBcg}
          parity={false}
        />
      </div>
    </section>
  )
}

export default InfoSection;