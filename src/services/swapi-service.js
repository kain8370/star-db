export default class SwapiService {

  _apiBase = 'https://swapi.dev/api/';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResourse = async (url) => {
    const data = await fetch(`${this._apiBase}${url}`);
    if (!data.ok) {
      throw new Error(`Error, status code: ${data.status}`);
    }
    const res = await data.json();
    return res;
  }

  getAllPeople = async () => {
    try {
      const result = await this.getResourse(`people`);
      return result.results.map(this._transformPerson);
    } catch(err) {
      console.log(err);
    }
  }

  getAllPlanets = async () => {
    const result = await this.getResourse(`planets`);
    return result.map(this._transformPlanet);
  }

  getAllStarShips = async () => {
    const result = await this.getResourse(`starships`);
    return result.map(this._transformStraship);
  }

  getPerson = async (id) => {
    const person = await this.getResourse(`people/${id}`);
    return this._transformPerson(person);
  }

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  }

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  }

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  }

  getPlanet = async (id) => {
    const planet = await this.getResourse(`planets/${id}`);
    return this._transformPlanet(planet);
  }

  getStarship = async (id) => {
    const starship = await this.getResourse(`starships/${id}`);
    return this._transformStraship(starship);
  }

  _extractId = (item) => {
    const idRegExp = /\/(\d+)\/$/;
    const id = item.url.match(idRegExp)[1];
    return id;
  }

  _transformPlanet = (planet) => {
    return {id: this._extractId(planet), 
            name: planet.name, 
            population: planet.population, 
            rotationPeriod: planet.rotation_period, 
            diameter: planet.diameter };
  }

  _transformStraship = (starship) => {
    return {id: this._extractId(starship), 
            name: starship.name, 
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length, 
            crew: starship.crew, 
            passengers: starship.passengers, 
            cargoCapacity: starship.cargoCapacity };
  }

  _transformPerson = (person) => {
    return {id: this._extractId(person), 
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,};
  }
}