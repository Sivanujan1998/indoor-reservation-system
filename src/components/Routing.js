import React,{useContext} from 'react'
import {BrowserRouter as Router, Route, Link,Switch,Redirect} from 'react-router-dom'
import Blog from '../pages/Blog'
import Home from '../pages/Home'
import Review from '../pages/Review'
import { loginstateglobal } from '../App'
import Bookingnow from '../pages/Bookingnow'

function Routing() {
    const loginContext=useContext(loginstateglobal)
    return (
        <div>
            <Switch>
                <Route exact path="/"   component={Home}/>
                <Route exact path="/booknow"  component={Bookingnow}/>
                <Route   path="/review"  component={Review} ></Route>
                <Route  path="/blog"  component={Blog}/>
             </Switch>
        </div>
    )
}

export default Routing
