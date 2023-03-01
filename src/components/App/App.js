import React from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Promo from '../Promo/Promo';
import InfoSection from '../InfoSection/InfoSection';
import HowToSection from '../HowToSection/HowToSection';

function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <Promo />
      <InfoSection />
      <HowToSection />
    </div>
  );
}

export default App;
