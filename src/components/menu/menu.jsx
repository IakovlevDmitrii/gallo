import React from 'react';

import './menu.css';

function Menu() {
  return (
    <div className="menu">
      <div className="wrapper">
        <div className="menu__wrapper">

          <div className="menu__col">
            <ul className="menu__widget widget">
              <li className="widget__item " data-image="/assets/img/menu/micro.jpg">
                <a className="widget__link" href="/micro#productPagePart">micro</a>
              </li>
              <li className="widget__item " data-image="/assets/img/menu/micro_se.jpg">
                <a className="widget__link" href="/micro_se#productPagePart">micro se</a>
              </li>
              <li className="widget__item " data-image="/assets/img/menu/adiva.jpg">
                <a className="widget__link" href="/adiva#productPagePart">adiva</a>
              </li>
              <li className="widget__item " data-image="/assets/img/menu/adiva_se.jpg">
                <a className="widget__link" href="/adiva_se#productPagePart">adiva se</a>
              </li>
              <li className="widget__item " data-image="/assets/img/menu/micro_droplet.jpg">
                <a className="widget__link" href="/micro_droplet#productPagePart">micro droplet</a>
              </li>
              <li className="widget__item " data-image="/assets/img/menu/micro_se_droplet.jpg">
                <a className="widget__link" href="/micro_se_droplet#productPagePart">micro se droplet</a>
              </li>
              <li className="widget__item " data-image="/assets/img/menu/adiva_droplet.jpg">
                <a className="widget__link" href="/adiva_droplet#productPagePart">adiva droplet</a>
              </li>
              <li className="widget__item " data-image="/assets/img/menu/adiva_se_droplet.jpg">
                <a className="widget__link" href="/adiva_se_droplet#productPagePart">adiva se droplet</a>
              </li>
              <li className="widget__item " data-image="/assets/img/menu/strada_2.jpg">
                <a className="widget__link" href="/strada_2#productPagePart">strada 2</a>
              </li>
              <li className="widget__item " data-image="/assets/img/menu/subwoofers.jpg">
                <a className="widget__link" href="/subwoofers#productPagePart">subwoofers</a>
              </li>
              <li className="widget__item " data-image="/assets/img/menu/accessories.jpg">
                <a className="widget__link" href="/accessories#productPagePart">accessories</a>
              </li>
            </ul>
          </div>
          <div className="menu__col">
            <img alt="micro" className="menu__img" src="/assets/img/menu/micro.jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;
