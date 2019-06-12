import React, { PureComponent } from 'react';
import { getGiphs } from '../services/giphy-api';

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
      <h1>hello</h1>
    );
  }
}

export default GiphContainer;
