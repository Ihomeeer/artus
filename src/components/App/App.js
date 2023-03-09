import React from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Promo from '../Promo/Promo';
import InfoSection from '../InfoSection/InfoSection';
import HowToSection from '../HowToSection/HowToSection';
import AboutSection from '../AboutSection/AboutSection';
import Footer from '../Footer/Footer';
import { aboutText, footerLink, footerPhone, footerAdress } from '../../vendor/data';

function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <Promo />
      <InfoSection />
      <HowToSection />
      <AboutSection
        textAbout={aboutText}
      />
      <Footer
        phone={footerPhone}
        adress={footerAdress}
        link={footerLink}
      />
    </div>
  );
}

export default App;
