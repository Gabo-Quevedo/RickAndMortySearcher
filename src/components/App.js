import React from 'react'
import { BrowserRouter, Switch,  Route} from 'react-router-dom'

import Home from '../pages/Home'
import Searched from '../pages/Searched'
import Layout from './Layout'

function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Searched} />
                    <Route exact path="/searched" component={Searched} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App