import React from 'react';
import styles from './AppHeader.module.css';
import logoPath from '../../images/logo.png';
import NavBar from '../NavBar/NavBar';

function AppHeader() {
  return (
    <div className={styles.section}>
      <div className={styles.contentContainer}>
        <a className={styles.logo} hre="true" href="https://www.google.com/">
          <img className={styles.logo} src={logoPath} alt="лого проекта" />
        </a>
        <NavBar />
      </div>
    </div>
  )
}

export default AppHeader;