import React from 'react';

import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__blocks">
          <div className="footer__block">
            <div className="footer__logo">
              <a className="footer__logo-link link" href="https://www.pult.ru/" target="_blank" rel='noreferrer' >
                <img alt="pult.ru" className="footer__logo-img" src="/assets/img/icons/Logo_pult-footer.svg" />
              </a>
            </div>
            <div className="footer__call">
              <a className="footer__tel" href="tel:+78005555152" target="_blank" rel='noreferrer' >8(800)555-51-52</a>
              <p className="footer__call-text">Звонок по России бесплатный</p>
            </div>
          </div>

          <ul className="footer__columns">
            <li className="footer__column">
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a className="footer__link link" href="#">Акустика</a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__link" href="#">Hi-Fi</a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__link" href="#">Винил</a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__link" href="#">Наушники</a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__link" href="#">Телевизоры</a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__link" href="#">Проекторы</a>
                </li>
              </ul>
            </li>
            <li className="footer__column">
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a className="footer__link" href="#">Распродажа</a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__link" href="#">Outlet</a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__link" href="#">Акции</a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__link" href="#">Бонусы и скидки</a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__link" href="#">Рассрочка</a>
                </li>
              </ul>
            </li>
            <li className="footer__column">
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a className="footer__link" href="#">О компании</a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__link" href="#">Контакты</a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__link" href="#">Салоны</a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__link" href="#">Новости</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <p className="footer__copyright">
          2021 © / pult.ru / все права защищены
        </p>
      </div>
    </footer>
  )
}

// <script type="text/javascript">document.write(new Date().getFullYear() );</script>

export default Footer;
