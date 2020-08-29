import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/home.css'

import rickMobile from '../images/rick.png'
import portal from '../images/portal.png'
import WALA from '../images/WALA.png'


export default class Home extends Component {
  render() {
    return (
      <main className="main">
        <section className="main__content">
          <picture>
            {/* <source media="(min-width:size*pordefinir)" srcset={expresion}/> */}
            <img src={rickMobile} alt="Logo Rick and Morty API Searcher"/>
          </picture>
          <picture>
            {/* <source media="(min-width:size*pordefinir)" srcset={expresion}/> */}
            <img src={WALA} alt="Logo Rick and Morty API Searcher"/>
          </picture>
          <picture>
            {/* <source media="(min-width:size*pordefinir)" srcset={expresion}/> */}
            <img src={portal} alt="Logo Rick and Morty API Searcher"/>
          </picture>
        </section>
      </main>
    );
  }
}
