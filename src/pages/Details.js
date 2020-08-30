import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Attribute from '../components/Attribute'

import './styles/details.css'



export default class Details extends Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      origin : {}
    }
}
componentDidMount(){
this.fetchDetails()
}
fetchDetails = async () => {
this.setState({ loading: true, error: null })

try{
 const numChar = this.props.match.params.charId
console.log(numChar)

const response = await fetch(`https://rickandmortyapi.com/api/character/${numChar}`)
const data = await response.json()
    console.log(data)
this.setState({
    loading: false,
    data:data,
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
        <section className="details__content">
          <div className="charPicture">
            <img src={this.state.data.image} alt=""/>
            <div className="charPicture__shadow"></div>
            <div className="charPicture-name">{this.state.data.name}</div>
            <div className="charPicture-origin">Origin-{this.state.data.origin.name}</div>
          </div>
          
                        <div className="AttributeContainer" >
                          <Attribute 
                valueColor="attributeContainer__value blue-value"
                typeColor="attributeContainer__type blue-type"
                contentValue={this.state.data.name || 'NONE'}
                contentType="SPECIES"/>
                <Attribute 
              valueColor="attributeContainer__value green-value"
              typeColor="attributeContainer__type green-type"
              contentValue={this.state.data.gender || 'NONE'}
                contentType="GENDER"/>
              <Attribute 
                valueColor="attributeContainer__value yellow-value"
              typeColor="attributeContainer__type yellow-type"
              contentValue={this.state.data.type || 'NONE'}  
                contentType="TYPE"/>
              <Attribute 
                valueColor="attributeContainer__value red-value"
                typeColor="attributeContainer__type red-type"
                contentValue={this.state.data.status || 'NONE'}
                contentType="STATUS"/>
                        </div>
        </section>
        
        </React.Fragment>
    );
  }
}
