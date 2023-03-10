import React from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Promo from '../Promo/Promo';
import InfoSection from '../InfoSection/InfoSection';
import HowToSection from '../HowToSection/HowToSection';
import AboutSection from '../AboutSection/AboutSection';
import Footer from '../Footer/Footer';
import ApplicationForm from '../ApplicationForm/ApplicationForm';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import {
  aboutText,
  footerLink,
  footerPhone,
  footerAdress,
  headerModalText,
  firstModalText,
  secondModalText,
} from '../../vendor/data';

function App() {

  // Рефы для всех видов ингредиентов и общего их списка
  // Секция "о проекте"
  const aboutRef = React.createRef();
  // Секция "Контакты"
  const contactsRef = React.createRef();

  //Обработка нажатий на вкладки
  const handleScrollSection = (ref) => {
    // прыжок к нужному рефу
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }


  return (
    <div className={styles.App}>
      <AppHeader
        aboutRef={aboutRef}
        contactsRef={contactsRef}
        handleScroll={handleScrollSection}
      />
      <Promo />
      <InfoSection />
      <HowToSection />
      <AboutSection
        textAbout={aboutText}
        aboutRef={aboutRef}
      />
      <Footer
        phone={footerPhone}
        adress={footerAdress}
        link={footerLink}
        contactsRef={contactsRef}
      />
      <ModalWithForm
        reversed={true}
        modalText={headerModalText}
      >
        <ApplicationForm
          title="Заявка"
          buttonTitle="Отправить заявку"
        />
      </ModalWithForm>

      <ModalWithForm
        color="rgb(122, 50, 46)"
        textColor="#fff"
        reversed={false}
        modalText={firstModalText}
      >
        <ApplicationForm
          title="Заявка"
          buttonTitle="Отправить заявку"
        />
      </ModalWithForm>

      <ModalWithForm
        color="rgb(24, 148, 109)"
        textColor="white"
        reversed={false}
        modalText={secondModalText}
      >
        <ApplicationForm
          title="Заявка"
          buttonTitle="Отправить заявку"
        />
      </ModalWithForm>

    </div>
  );
}

export default App;
