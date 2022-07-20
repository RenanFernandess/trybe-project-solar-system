import React, { Component } from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';
import './SolarSystem.css';

class SolarSystem extends Component {
  render() {
    const elements = Planets.map(({ name, image }) => (
      <PlanetCard key={ name } planetName={ name } planetImage={ image } />));

    return (
      <section data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="container-planets">
          { elements }
        </section>
      </section>
    );
  }
}

export default SolarSystem;
