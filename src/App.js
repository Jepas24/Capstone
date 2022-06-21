import React from 'react'
import {Navbar,Footer,Home} from './components';
import {AdminDashboard} from './Container';
import { BrowserRouter as Router, Route, Switch,Redirect  } from 'react-router-dom';
import { Refreshable } from 'react-router-refreshable'
import './App.css';


const App = () => {
  return (
    <Router>
    <div className='App'>
          <Switch>
                {/* This Route is for Song Play */}
                 <Route exact path="/">
                    <Redirect to="/Home" />
                  </Route>
                  <Route exact path="/Home">
                  <div className='gradient_bg'>
                    <Navbar />
                  </div>
                  <div className='ams_backgrund-home'>
                  <Refreshable>
                        <Home />
                  </Refreshable>
                  </div> 
                  <Footer />
                  </Route>
                
          </Switch>
          <Switch>
                {/* This Route is for Song Play */}
                 <Route exact path="/d">
                     <AdminDashboard />
                  </Route>
          </Switch>
    </div>
    </Router>
  )
}



export default App
