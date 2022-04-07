import React from 'react'
import {Navbar,Footer} from './components';
import {GraisePraiseHeader,GraisePraiseMain,GraisePraiseSection} from './containers/csRadio-Song/GracePraise';
import {UrbanMixHeader,UrbanMixMain,UrbanMixSection} from './containers/csRadio-Song/UrbanMix';
import {OverDriveHeader,OverDriveMain,OverDriveSection} from './containers/csRadio-Song/OverDrive';
import {OverDriveRequest,UrbanMixRequest,GracePraiseRequest} from './containers/csRadio-Request';
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
                {/* This Route is for Song Play */}
                 <Route exact path="/">
                    <Redirect to="/OverDrive" />
                  </Route>
                  <Route exact path="/OverDrive">
                  <Refreshable>
                        <OverDriveHeader />
                  </Refreshable>
                        <OverDriveSection />
                        <OverDriveMain />
                        
                  </Route>
                  <Route exact path="/Grace&Praise">
                  <Refreshable>
                        <GraisePraiseHeader />
                  </Refreshable>
                        <GraisePraiseSection />
                        <GraisePraiseMain />
                  </Route>
                  <Route exact path="/UrbanMix">
                  <Refreshable>
                        <UrbanMixHeader />
                  </Refreshable>
                        <UrbanMixSection />
                        <UrbanMixMain />
                  </Route>
                  {/* This Route is for Request Song */}
                  <Route exact path="/Grace-Praise/*">
                         < GracePraiseRequest />
                  </Route>
                  <Route exact path="/OverDrive/*">
                          < OverDriveRequest />
                  </Route>
                  <Route exact path="/UrbanMix/*">
                        < UrbanMixRequest />
                  </Route>
          </Switch>
          
          <Footer />
    </div>
    </Router>
  )
}



export default App
