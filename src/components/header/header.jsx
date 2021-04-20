import React from 'react';

import galloAcousticsImage from './images/Gallo_Acoustics.svg';
import logoPultImage from './images/logo_pult.svg';

import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__wrapper">
          <a className="header__link link" href="https://www.pult.ru/" target="_blank" rel="noreferrer">
            <img alt="Gallo_Acoustics" className="header__img" src={galloAcousticsImage} />
          </a>
          <a className="header__link link" href="https://www.pult.ru/" target="_blank" rel="noreferrer">
            <img alt="pult.ru" className="header__img header__img--pult" src={logoPultImage} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
