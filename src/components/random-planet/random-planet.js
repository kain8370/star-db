import React from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import randomPlanetStyle from './random-planet.module.css';

class RandomPlanet extends React.Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  swapiService = new SwapiService();

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false});
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 20);
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  onError = () => {
    this.setState({ loading: false, error: true })
  }

  render() {
    const hasData = !(this.state.loading || this.state.error);
    const error = this.state.error ? <ErrorIndicator /> : null;
    const loader = this.state.loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={this.state} /> : null;
    return (
      <div className="card text-white bg-primary mb-3" style={{maxWidth: '100%', display: 'flex', margin: '40px auto', flexDirection: 'row'}}>
        {error}
        {loader}
        {content}
      </div>
    );
  }
}

const PlanetView = ({planet}) => {
  const { planet: {id, name, population, rotationPeriod, diameter} } = planet;
  return (
    <>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="some planet" />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">Population: {population}</p>
        <p className="card-text">Rotation Period: {rotationPeriod}</p>
        <p className="card-text">Diameter: {diameter}</p>
      </div>
    </>
  )
}

export default RandomPlanet;