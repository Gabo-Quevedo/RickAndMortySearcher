import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import examp from '../images/1.jpeg'

import './styles/searched.css'



export default class Searched extends Component {
  render() {
    return (
        <React.Fragment>
            <main>
                <section className="fillList">
                    <div className="fillList__content">
                        <div className="fillList__content-card">
                            <img src={examp} alt="Foto de personaje"/>
                        </div>
                        <div className="fillList_content_nameContent">
                            <label className="fillList_content_nameContent-name">Rick Sanchez</label>
                        </div>
                    </div>
                </section>
            </main>
      </React.Fragment>
    );
  }
}
