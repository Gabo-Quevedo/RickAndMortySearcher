import React from 'react'
import { Link } from 'react-router-dom'

import './styles/attribute.css'

// import examp from '../images/1.jpeg'

class Attribute extends React.Component{
    
    render(){
        return (
        <React.Fragment>
                <div className={this.props.typeColor}>
                    <label className="attributeContainer__type-name">{this.props.contentType}</label>
                </div>
                <div className={this.props.valueColor}>
                 <label className="attributeContainer__value-name">{this.props.contentValue}</label>
                </div>
        </React.Fragment>   
        )
    }
}

export default Attribute