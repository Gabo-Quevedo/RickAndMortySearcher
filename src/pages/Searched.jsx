import React, { Component } from 'react';
import SearchHeader from '../components/SearchHeader';

import CharBadge from '../components/CharBadge';
import NavFooter from '../components/NavFooter';

import './styles/searched.css';

class Searched extends Component {
  constructor() {
    super();
    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        results: [],
      },
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  async fetchCharacters() {
    this.setState({ loading: true, error: null });
    try {
      const { nextPage, data } = this.state;
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${nextPage}`);
      const responseData = await response.json();
      this.setState({
        loading: false,
        data: {
          info: responseData.info,
          results: [].concat(data.results, responseData.results),
        },
        nextPage: responseData.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  }

  handleKeyPress(event) {
    if (event.key === ' ') {
      this.fetchCharacters();
    }
  }

  render() {
    const { error, data, loading } = this.state;
    if (error) {
      return `Error: ${error.message}`;
    }
    return (
      <>
        <SearchHeader />
        <section className="searched__content">
          {data.results.map((character) => (
            <div className="fillList" key={character.id}>
              <CharBadge character={character} />
            </div>
          ))}
        </section>
        { !loading
          && (<NavFooter spaceMore={this.handleKeyPress} more={() => this.fetchCharacters()} />)}
      </>
    );
  }
}
export default Searched;
