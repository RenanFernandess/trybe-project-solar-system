import React, { Component } from 'react';
// import Planets from '../data/planets';
// import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    // const elements = Planets
    //   .map((planet, ind) => <PlanetCard key={ ind } planet={ planet } />);

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
