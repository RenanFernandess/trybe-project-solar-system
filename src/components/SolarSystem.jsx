import { Component } from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const elements = Planets
      .map((planet, ind) => <PlanetCard key={ind} planet={planet} />);

    return (
      <div data-testid="solar-system">
        {elements}
      </div>
    );
  }
}

export default SolarSystem;
