import React from 'react';
import SwapiService from '../../services/swapi-service';

import appStyle from './app.module.css';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import Page from '../page/page';

function App() {
  const swapiService = new SwapiService();

  return (
    <div className={appStyle.app}>
      <Header />
      <div className={appStyle.wrapper}>
        <RandomPlanet />
        <Page getData={swapiService.getAllPeople} />
      </div>
    </div>
  )
}

export default App;
