import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Attribute from '../components/Attribute'

import './styles/details.css'

import rickMobile from '../images/1.jpeg'


export default class Details extends Component {
   state = {
      loading: true,
      error: null,
      data: [0],
  }
componentDidMount(){
this.fetchData()
}

fetchData = async e => {
this.setState({ loading: true, error: null })
try{
const response = await fetch('https://rickandmortyapi.com/api/character/1')/* .read(
  this.props.match.params.charId
) */
const data = await response[0].json()

this.setState({
    loading: false,
    data: data,
})
}catch(error){
this.setState({
    loading: false,
    error: error
})
}
}
  render() {
    return (
        <React.Fragment>
        <section className="details__content">
          <div className="charPicture">
            <img src="" alt=""/>
            <div className="charPicture__shadow"></div>
            <div className="charPicture-name">Rick Sanchez</div>
            <div className="charPicture-origin">Origin-Earth</div>
          </div>
          {this.state.data.map(character => (
                        <div className="AttributeContainer" key={character.id}>
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
                        </div>
                        ))}
            <div className="AttributeContainer">
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
            </div>
        </section>
        
        </React.Fragment>
    );
  }
}
