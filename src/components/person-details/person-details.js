import React from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';

import personDetailsStyle from './person-details.module.css';

class PersonDetails extends React.Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    hasError: false
  }

  updatePerson = () => {
    const personId = this.props.personId;
    if (!personId) return;
    this.swapiService.getPerson(personId)
      .then(person => {
        console.log(person);
        this.setState({person})
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.personId !== this.props.personId) {
      this.updatePerson();
    }
  }

  render() {
    if (!this.state.person) return null;
    const { name, id, birthYear, gender, eyeColor} = this.state.person;
    if (this.state.hasError) return <ErrorIndicator />;
    return (
       <div className="card text-white bg-primary mb-3" style={{maxHeight: 300, width: '100%', marginLeft: 30, display: 'flex', flexDirection: 'row'}}>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={name} className={personDetailsStyle.image} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">Gender: {gender}</p>
          <p className="card-text">Birth Year: {birthYear}</p>
          <p className="card-text">Eye Color: {eyeColor}</p>
        </div>
      </div>
    );
  }
}

export default PersonDetails;