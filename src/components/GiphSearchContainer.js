import React, { PureComponent } from 'react';
import { getGiphs } from '../services/giphy-api';
import GiphList from './GiphList';
import Search from './Search';
import style from '../styles/main.css';

class GiphSearchContainer extends PureComponent {
  state = {
    query: 'cats',
    giphs: []
  }

  updateGiphs = () => {
    getGiphs(this.state.query)
      .then(giphs => this.setState({ giphs }));
  }

  componentDidMount() {
    this.updateGiphs();
  }

  componentDidUpdate() {
    this.updateGiphs();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { giphs, query } = this.state;
    return (
      <main style={style}>
        <Search query={query} onChange={this.handleChange}/>
        <GiphList giphs={giphs}/>
      </main>
    );
  }
}

export default GiphSearchContainer;
