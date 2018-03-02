import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'

import routes from '../route/route.config.js'

import Tabbar from '../components/tabbar/Tabbar.jsx'

class App extends Component{
    constructor(){
        super()
        this.state = {
           currentTab: 'index'
        }

        this.handleTabbarChange = this.handleTabbarChange.bind(this)
    }
    handleTabbarChange(v){
        this.setState({
            currentTab: v
        })
    }
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        {
                            routes.map((route , index) => {
                                return <Route key={index} 
                                                path={route.path}
                                                exact={route.exact}
                                                component={route.component}></Route>
                            })
                        }
                    </Switch>
                    <Tabbar onClick={this.handleTabbarChange} />
                </div>
            </Router>
        )
    }
}

export default App