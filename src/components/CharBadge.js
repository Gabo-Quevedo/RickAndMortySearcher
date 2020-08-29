import React from 'react'
import { Link } from 'react-router-dom'

// import examp from '../images/1.jpeg'

class CharBadge extends React.Component{
    
    render(){
        return (
                <Link to={`/character/details`} className="fillList__content">
                <div className="fillList__content-card">
                    <img src={this.props.character.image} alt="Foto de personaje"/>
                </div>
                <div className="fillList_content_nameContent">
                    <label className="fillList_content_nameContent-name">{this.props.character.name}</label>
                </div>    
            </Link>
            
        )
    }
}

export default CharBadge