import React, { Component } from 'react';
import './Missions.css';
import missions from '../data/missions';
import Title from './Title';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const elements = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />
    ));

    return (
      <section className="container" data-testid="missions">
        <Title headline="Missões" />
        <section className="missionsCont">
          { elements }
        </section>
      </section>
    );
  }
}

export default Missions;
