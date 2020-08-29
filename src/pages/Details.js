import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Attribute from '../components/Attribute'

import './styles/details.css'

import rickMobile from '../images/1.jpeg'


export default class Details extends Component {
  render() {
    return (
        <React.Fragment>
        <section className="details__content">
          <div className="charPicture">
            <img src={rickMobile} alt=""/>
            <div className="charPicture__shadow">
            </div>
            <div className="charPicture-name">Rick Sanchez</div>
            <div className="charPicture-origin">Origin-Earth</div>
          </div>
          <Attribute 
          valueColor="attributeContainer__value blue-value"
          typeColor="attributeContainer__type blue-type"/>
          <Attribute 
          valueColor="attributeContainer__value green-value"
          typeColor="attributeContainer__type green-type"/>
          <Attribute 
          valueColor="attributeContainer__value yellow-value"
          typeColor="attributeContainer__type yellow-type"/>
          <Attribute 
          valueColor="attributeContainer__value red-value"
          typeColor="attributeContainer__type red-type"/>
        </section>
        
        </React.Fragment>
    );
  }
}
