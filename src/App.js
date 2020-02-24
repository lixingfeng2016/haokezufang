import React, { Component, Fragment } from 'react';
import { Route, HashRouter as Router, Switch, Redirect } from "react-router-dom";

import Home from './pages/home'
import Mapcity from './pages/mapcity'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Router>
            <div className="cntent">
              <Switch>
                <Route component={Home} path='/home'></Route>
                <Route component={Mapcity} path='/mapcity'></Route>
                <Route exact path='/'>
                  <Redirect to='/home'></Redirect>
                </Route>
              </Switch>
            </div>

          </Router>

        </div>
      </Fragment>
    );
  }
}
export default App;