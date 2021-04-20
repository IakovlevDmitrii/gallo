import React, { Component } from 'react';
import menuData from '../../services/menu-data';
import './menu.css';

export default class Menu extends Component {
  state = {
    imageSource: menuData[0].dataImage,
    activeItemId: null,
  };

  getMenuItems( itemId ) {
    return (
      menuData.map( (item) => {
        const { id, dataImage, href, linkText } = item;
        const isActive = itemId === id;
        const className = 'widget__item';

        return (
          <li
            key={id}
            className={isActive ? `${className} active` : className}
            data-image={dataImage}
            onMouseOver={(event) => this.onLinkOver(event, id)}
            onFocus={(event) => this.onLinkOver(event, id)}
          >
            <a className="widget__link" href={href}>
              {linkText}
            </a>
          </li>
        )
      })
    )
  };

  onLinkOver = (event, activeItemId) => {
    const imageSource = event.target.dataset.image;
    if(imageSource) {
      this.setState({
        imageSource,
        activeItemId
      })
    }
  };

  render() {
    const { imageSource, activeItemId } = this.state;

    return (
      <div className="menu">
        <div className="wrapper">
          <div className="menu__wrapper">
            <div className="menu__col">
              <ul className="menu__widget widget">
                {this.getMenuItems(activeItemId)}
              </ul>
            </div>
            <div className="menu__col">
              <img alt="micro" className="menu__img" src={imageSource} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
