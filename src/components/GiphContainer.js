import React, { PureComponent } from 'react';
import { getGiphs } from '../services/giphy-api';
import GiphList from './GiphList';

class GiphContainer extends PureComponent {
  state = {
    searchTerm: '',
    giphs: []
  }

  componentDidMount() {
    getGiphs()
      .then(giphs => this.setState({ giphs }));
  }

  render() {
    const giphs = this.state.giphs;
    return (
      <GiphList giphs={giphs}/>
    );
  }
}

export default GiphContainer;
