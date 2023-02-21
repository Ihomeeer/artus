import React from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Promo from '../Promo/Promo';

function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <Promo />
    </div>
  );
}

export default App;
