import React from 'react';

import Header from '../header';
import Main from '../main';
import Menu from '../menu';
import Footer from '../footer';

import './app.css';

function App() {
  return (
     <div className='app'>
        <Header/>
        <Main/>
        <Menu/>
        <Footer/>
     </div>
  )
}

export default App;
