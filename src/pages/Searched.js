import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharBadge from '../components/charBadge'



import './styles/searched.css'



export default class Searched extends Component {
    state = {
        data: {
            results: [],
        }
    }
componentDidMount(){
    this.fetchCharacters()
}
fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const data = await response.json()

    this.setState({
        data: data
    })
}
  render() {
    return (
        <React.Fragment>
            <main>
            {this.state.data.results.map(character => (
                <section className="fillList" key={character.id}>
                    <CharBadge character={character} />
                </section>
                ))}
            </main>
      </React.Fragment>
    );
  }
}
