import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import history from '../utility/history';
import bigLogo from '../images/RickandMorty@2x.png';

import './styles/header.css';

import mobileLogo from '../images/Rick and Morty.png';

function SearchHeader() {
  const [filterWord, setFilterWord] = useState('');
  const [formKey, setFormFey] = useState(1);
  return (
    <header>
      <div className="header__container">
        <picture className="header__container__picture">
          <source media="(min-width:768px)" srcSet={bigLogo} />
          <img src={mobileLogo} alt="Logo Rick and Morty API Searcher" />
        </picture>
        <form
          key={formKey}
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            history.push(`/searched/${filterWord}`);
            setFormFey(formKey + 1);
          }}
        >
          <label className="form__label" htmlFor="form__label-searcher">
            <input
              placeholder="Search..."
              onChange={(event) => {
                setFilterWord(event.target.value);
              }}
              name="filterWord"
              className="form__label-searcher"
              id="form__label-searcher"
              type="text"
            />
          </label>
          <Link className="show" to="/searched/">Show all...</Link>
        </form>
      </div>
    </header>
  );
}

export default SearchHeader;
