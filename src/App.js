import React from 'react'
import {Navbar,Footer,Home} from './components';
import { BrowserRouter as Router, Route, Switch,Redirect  } from 'react-router-dom';
import { Refreshable } from 'react-router-refreshable'
import './App.css';


const App = () => {
  return (
    <Router>
    <div className='App'>
      <div className='gradient_bg'>
          <Navbar />
      </div>
      
          <Switch>
            <div className='ams_backgrund-home'>
                {/* This Route is for Song Play */}
                 <Route exact path="/">
                    <Redirect to="/Home" />
                  </Route>
                  <Route exact path="/Home">
                  <Refreshable>
                        <Home />
                  </Refreshable>
                  </Route>
            </div>      
          </Switch>
          
          <Footer />
    </div>
    </Router>
  )
}



export default App
