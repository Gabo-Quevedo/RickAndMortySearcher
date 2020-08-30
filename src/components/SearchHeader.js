import React from 'react'

import './styles/header.css'
import mobileLogo from '../images/Rick and Morty.png'

import { Link } from 'react-router-dom'

class SearchHeader extends React.Component{
    render(){
        return (
        <header>
            <div className="header__container">
                <picture>
                    {/* <source media="(min-width:size*pordefinir)" srcset={expresion}/> */}
                    <img src={mobileLogo} alt="Logo Rick and Morty API Searcher"/>
                </picture>
                <form className="form" action="">
                    <label className="form__label" htmlFor="form__label-searcher">
                        <input placeholder="Search..." className="form__label-searcher" id="form__label-searcher" type="text"/>
                    </label>
                <Link className="show" to="/searched">Show all...</Link>
                </form>
            </div>
        </header>
        )
    }
}

export default SearchHeader