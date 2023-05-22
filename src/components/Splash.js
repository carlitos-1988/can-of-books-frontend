import React from 'react';
import LoginButton from './Login';
import '../Style.scss';
import myImage from '../assets/MediCalpng.png';

const Splash = () => {
  return (
    <div className="splash-page">
      <div className="splash-container">
        <img src={myImage} alt="medicalendar logo" className="center-image" />
        <div className="button-container">
        <LoginButton className="login-button" />
        </div>
      </div>
    </div>
  );
};

export default Splash;

