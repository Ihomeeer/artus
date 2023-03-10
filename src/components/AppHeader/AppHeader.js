import React from 'react';
import styles from './AppHeader.module.css';
import logoPath from '../../images/logo.png';
import NavBar from '../NavBar/NavBar';

function AppHeader({ aboutRef, contactsRef, handleScroll }) {
  return (
    <section className={styles.section}>
      <div className={styles.contentContainer}>
        <a className={styles.logo} hre="true" href="https://www.google.com/">
          <img className={styles.logo} src={logoPath} alt="лого проекта" />
        </a>
        <NavBar
          aboutRef={aboutRef}
          contactsRef={contactsRef}
          handleScroll={handleScroll}
        />
      </div>
    </section>
  )
}

export default AppHeader;