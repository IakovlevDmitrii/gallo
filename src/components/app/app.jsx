import React from 'react';

import Header from '../header';
import Slider from '../slider';
import Menu from '../menu';
import Footer from '../footer';

import slidersData from '../../services/sliders-data/sliders-data';

import './app.css';

const App = () => {
  const topSliderSlides = slidersData.getTopSliderData();
  const bottomSliderSlides = slidersData.getBottomSliderData();

  return (
    <>
      <Header/>
      <div className='main'>
        <Slider slidesList={topSliderSlides} />
        <Slider slidesList={bottomSliderSlides} />
      </div>
      <Menu/>
      <Footer/>
    </>
  )
};

export default App;
