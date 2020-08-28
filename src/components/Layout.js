import React from 'react'
import Header from '../components/header'


function Layout (props) {
    // const children = props.childen
    return (
        <React.Fragment>
            <Header />
            {props.children}
        </React.Fragment>
    ) 
}

export default Layout