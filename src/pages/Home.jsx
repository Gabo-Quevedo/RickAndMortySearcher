import React from 'react';
import SearchHeader from '../components/SearchHeader';

import './styles/home.css';

import rickMobile from '../images/rick.png';
import portal from '../images/portal.png';
import WALA from '../images/WALA.png';

function Home() {
  return (
    <>
      <SearchHeader />
      <section className="home__content">
        <picture>
          {/* <source media="(min-width:size*pordefinir)" srcset={expresion}/> */}
          <img src={rickMobile} alt="Logo Rick and Morty API Searcher" />
        </picture>
        <picture>
          {/* <source media="(min-width:size*pordefinir)" srcset={expresion}/> */}
          <img src={WALA} alt="Logo Rick and Morty API Searcher" />
        </picture>
        <picture>
          {/* <source media="(min-width:size*pordefinir)" srcset={expresion}/> */}
          <img src={portal} alt="Logo Rick and Morty API Searcher" />
        </picture>
      </section>
    </>
  );
}

export default Home;
