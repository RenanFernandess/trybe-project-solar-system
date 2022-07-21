import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Title.css';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return <h2>{headline}</h2>;
  }
}

Title.propTypes = {
  headline: propTypes.string.isRequired,
};

export default Title;
