import React, { Component } from 'react';
import './Missions.css';
import Title from './Title';

class Missions extends Component {
  render() {
    return (
      <section data-testid="missions">
        <Title headline="Missões" />
      </section>
    );
  }
}

export default Missions;
