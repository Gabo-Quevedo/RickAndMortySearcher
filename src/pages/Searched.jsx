import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SearchHeader from '../components/SearchHeader';
import history from '../utility/history';

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
      scContent: false,
      data: {
        results: [],
      },
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { filterWord } } } = this.props;
    const { match: { params: { filterWord: prevFilterWord } } } = prevProps;
    if (filterWord !== prevFilterWord) {
      this.fetchCharacters();
    }
  }

  async fetchCharacters() {
    this.setState({ loading: true, error: null });
    const { nextPage, data, scContent } = this.state;
    const { match: { params: { filterWord } } } = this.props;
    if (!filterWord) {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${nextPage}`);
        const responseData = await response.json();
        if (scContent) {
          this.setState({
            loading: false,
            data: {
              info: responseData.info,
              results: [].concat(data.results, responseData.results),
            },
            scContent: true,
            nextPage: nextPage + 1,
          });
        } else {
          this.setState({
            loading: false,
            data: {
              info: responseData.info,
              results: responseData.results,
            },
            scContent: true,
            nextPage: nextPage + 1,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error,
        });
      }
    } else {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${filterWord}`);
        const responseData = await response.json();
        if (!responseData.results) {
          throw new Error();
        }
        this.setState({
          loading: false,
          data: {
            info: responseData.info,
            results: responseData.results,
          },
          scContent: false,
          nextPage: 1,
        });
      } catch (error) {
        history.push('/NotFound');
      }
    }
  }

  handleKeyPress(event) {
    if (event.key === ' ') {
      this.fetchCharacters();
    }
  }

  render() {
    const { match: { params: { filterWord } } } = this.props;

    const {
      error, data, loading,
    } = this.state;
    if (!data.results) {
      return null;
    }
    if (error) {
      return `Error: ${error.message}`;
    }
    return (
      <main className="mainSearched">
        <SearchHeader filterWord={filterWord} />
        <section className="searched__content">
          {data.results.map((character) => (
            <div className="fillList" key={character.id}>
              <CharBadge character={character} />
            </div>
          ))}
        </section>
        {!loading
          && (<NavFooter spaceMore={this.handleKeyPress} more={() => this.fetchCharacters()} />)}
      </main>
    );
  }
}
Searched.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ filterWord: PropTypes.string }),
  }).isRequired,
};

export default Searched;
