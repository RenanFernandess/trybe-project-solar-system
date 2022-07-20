import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planetElement" data-testid="planet-card">
        <img className="planet" src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p><strong data-testid="planet-name">{ planetName }</strong></p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
