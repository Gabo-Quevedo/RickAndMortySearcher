import React from 'react'

import PrevNav from '../images/Prev.svg'
import NextvNav from '../images/Next.svg'

import './styles/navFooter.css'

import { Link } from 'react-router-dom'

class NavFooter extends React.Component{
    render(){
        return (
        <footer>
            <div className="navFooter_container">
                <Link to="#" className="navFooter_container-prevBtn">
                    <img src={PrevNav} alt="Cargar lista Previa de Personajes"/>
                </Link>
                <Link to="#" className="navFooter_container-nextBtn">
                    <img src={NextvNav} alt="Cargar lista Previa de Personajes"/>
                </Link>
            </div>
        </footer>
        )
    }
}

export default NavFooter