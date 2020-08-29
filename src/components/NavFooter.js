import React from 'react'

import More from '../images/More.svg'

import './styles/navFooter.css'

import { Link } from 'react-router-dom'

class NavFooter extends React.Component{
    render(){
        return (
        <footer>
            <div className="navFooter_container">
                <div to="#" className="navFooter_container-prevBtn">
                    <img onClick={this.props.more} src={More} alt="Cargar lista Previa de Personajes"/>
                </div>
            </div>
        </footer>
        )
    }
}

export default NavFooter