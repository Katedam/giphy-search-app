import React, { PureComponent } from 'react';
import Search from './Search';

class SearchContainer extends PureComponent {
  state = {
    query: 'cats'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const query = this.state.query;
    return (
      <Search query={query} onChange={this.handleChange}/>
    );
  }
}

export default SearchContainer;
