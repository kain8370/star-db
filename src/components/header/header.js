import React from 'react';

import headerStyle from './header.module.css';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className={headerStyle.container}>
        <a className="navbar-brand text-info" href="#">Swapi</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-success" href="#">People
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success" href="#">Planets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success" href="#">Starship</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}

export default Header;