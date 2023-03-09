import styles from './Footer.module.css';
import cx from 'classnames';
import logoPath from '../../images/logo-reverse.png';

function Footer({ phone, adress, link }) {
  return (
    <section className={styles.section}>
      <div className={styles.contentContainer}>
        <a className={styles.logo} hre="true" href="https://www.google.com/">
          <img className={styles.logo} src={logoPath} alt="лого проекта" />
        </a>
        <div className={styles.infoContainer}>
          <p className={cx(styles.phoneNumber, styles.text)}>
            {phone}
          </p>
          <p className={cx(styles.adress, styles.text)}>
            {adress}
          </p>
        </div>
      </div>
      <a className={styles.link} href={link.link}>
          {link.text}
        </a>
    </section>
  )
}

export default Footer;