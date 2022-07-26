import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,Route,
  } from "react-router-dom";
import Landing from './pages/Landing';


const App = () => {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path="/"><Landing/>
                </Route>
                <Route path="/login"><Login/>
                </Route>
                <Route path="/register"><Register/>
                </Route>
            </Switch>
        </Router>  
    </div>
  )
}

export default App
