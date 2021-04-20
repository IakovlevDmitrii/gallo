import React from 'react';

import FooterData from '../../services/footer-data';

import logoSource from './images/Logo_pult-footer.svg';
import './footer.css';

const Footer = () => {

  function getItems(itemList) {
    return itemList.map((item) => {
      const { id, href, itemText } = item;

      return (
        <li className="footer__list-item" key={id}>
          <a className="footer__link link" href={href}>
            {itemText}
          </a>
        </li>
      )
    })
  }

  const columns = [
    {id: 1, column: getItems(FooterData.leftItemList)},
    {id: 2, column: getItems(FooterData.centerItemList)},
    {id: 3, column: getItems(FooterData.rightItemList)},
  ];

  function getColumns(itemList) {
    return itemList.map((item) => {
      const { id, column } = item;

      return (
        <li className="footer__column" key={id}>
          <ul className="footer__list">
            {column}
          </ul>
        </li>
      )
    })
  }

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__blocks">
          <div className="footer__block">
            <div className="footer__logo">
              <a className="footer__logo-link link" href="https://www.pult.ru/" target="_blank" rel="noreferrer">
                <img alt="pult.ru" className="footer__logo-img" src={logoSource} />
              </a>
            </div>
            <div className="footer__call">
              <a className="footer__tel" href="tel:+78005555152" target="_blank" rel="noreferrer">
                8(800)555-51-52
              </a>
              <p className="footer__call-text">Звонок по России бесплатный</p>
            </div>
          </div>

          <ul className="footer__columns">
            {getColumns(columns)}
          </ul>
        </div>
        <p className="footer__copyright">2021 © / pult.ru / все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;
