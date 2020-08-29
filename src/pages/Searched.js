import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CharBadge from '../components/charBadge'
import NavFooter from '../components/NavFooter'



import './styles/searched.css'



export default class Searched extends Component {
    state = {
        nextPage: 1,
        loading: true,
        error: null,
        data: {
            results: [],
        }
    }
componentDidMount(){
    this.fetchCharacters()
}
fetchCharacters = async () => {
    this.setState({ loading: true, error: null })

    try{
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`)
    const data = await response.json()

    this.setState({
        loading: false,
        data: {
            info: data.info,
            results: [].concat(this.state.data.results, data.results),
        },
        nextPage : this.state.nextPage +1,
    })
}catch(error){
    this.setState({
        loading: false,
        error: error
    })
}
}
  render() {
      if(this.state.error){
          return `Error: ${this.state.error.message}`
      }
    return (
        <React.Fragment>
            <main>
                <section className="main__content">
                    {this.state.data.results.map(character => (
                        <div className="fillList" key={character.id}>
                            <CharBadge character={character} />
                        </div>
                        ))}
                </section>
            </main>
            {this.state.loading &&
            (
                <div>Hola</div>
            )}
            {!this.state.loading &&
            (
                <NavFooter more={()=>this.fetchCharacters()}/>
            )}
            
      </React.Fragment>
    );
  }
}
