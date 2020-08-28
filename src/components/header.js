import React from 'react'

//import './styles/'
import mobileLogo from '../images/Rick and Morty.png'

import { Link } from 'react-router-dom'

class header extends React.Component{
    render(){
        return (
        <div>
            <img src={mobileLogo} alt=""/>
        </div>
        )
    }
}

export default header