import React from 'react';

import Header from '../header';
import Slider from '../slider';
import Menu from '../menu';
import Footer from '../footer';

import slidersData from '../../services/sliders-data';

import './app.css';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Slider slidesList={slidersData.getTopSliderData()} />
        <Slider slidesList={slidersData.getBottomSliderData()} />
      </div>
      <Menu />
      <Footer />
    </>
  );
}

export default App;
