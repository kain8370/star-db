import React from 'react';
import SwapiService from '../../services/swapi-service';

import appStyle from './app.module.css';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemDetails from '../item-details/item-details';
import ItemList from '../item-list/item-list';
import Row from '../row/row';
import ErrorBoundry from '../error-boundry/error-boundry';
import Record from '../record/record';

function App() {
  const swapiService = new SwapiService();
  const [selectedItem, setSelectedItem] = React.useState(5);

  const onItemSelected = (id) => {
    setSelectedItem(id);
  }

  const itemList = (
    <ErrorBoundry>
      <ItemList onItemSelected={onItemSelected} getData={swapiService.getAllPeople} renderItem={item => item.name} />
    </ErrorBoundry>
  );
  const personDetails = (
    <ErrorBoundry>
      <ItemDetails id={selectedItem} getData={swapiService.getPerson} getImageUrl={swapiService.getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
        <Record field="birthYear" label="Birth Year" />
      </ItemDetails>
    </ErrorBoundry>        
  );
  const planetDetails = (
    <ErrorBoundry>
      <ItemDetails id={selectedItem} getData={swapiService.getPlanet} getImageUrl={swapiService.getPlanetImage}>
        <Record field="diameter" label="Diameter" />
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation Period" />
      </ItemDetails>
    </ErrorBoundry>
  )
  const starshipDetails = (
    <ErrorBoundry>
      <ItemDetails id={selectedItem} getData={swapiService.getStarship} getImageUrl={swapiService.getStarshipImage}>
        <Record field="model" label="model" />
        <Record field="length" label="length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    </ErrorBoundry>
  )

  return (
    <div className={appStyle.app}>
      <Header />
      <div className={appStyle.wrapper}>
        <RandomPlanet />
        <>
          <Row left={itemList} right={personDetails} />
          <Row left={planetDetails} right={starshipDetails} />
        </>
      </div>
    </div>
  )
}

export default App;
