import React from 'react'


function Layout (props) {
    // const children = props.childen
    return (
        <React.Fragment>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    ) 
}

export default Layout