import styles from './AboutSection.module.css';

function AboutSection({ textAbout, aboutRef }) {
  return (
    <section className={styles.section} ref={aboutRef}>
      <h2 className={styles.header}>
        Об организации
      </h2>
      <p className={styles.textAbout}>
        {textAbout}
      </p>
    </section>
  )
}

export default AboutSection;