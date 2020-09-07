import React from 'react';
import SearchHeader from '../components/SearchHeader';

import './styles/home.css';

import rickMobile from '../images/rick.png';
import bigRickMobile from '../images/rick@2x.png';
import portal from '../images/Loader.svg';
import bigPortal from '../images/Loader@2x.png';
import WALA from '../images/WALA.png';
import bigWALA from '../images/WALA@2x.png';

function Home() {
  return (
    <main className="mainHome">
      <SearchHeader />
      <section className="home__content">
        <picture className="eyeRick">
          <source media="(min-width:768px)" srcSet={bigRickMobile} />
          <img src={rickMobile} alt="Logo Rick and Morty API Searcher" />
        </picture>
        <picture className="wala">
          <source media="(min-width:768px)" srcSet={bigWALA} />
          <img src={WALA} alt="Logo Rick and Morty API Searcher" />
        </picture>
        <picture className="portal">
          <source media="(min-width:768px)" srcSet={bigPortal} />
          <img src={portal} alt="Logo Rick and Morty API Searcher" />
        </picture>
      </section>
    </main>
  );
}

export default Home;
