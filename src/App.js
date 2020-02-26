import React, { Component, Fragment } from 'react';
import { Route, HashRouter as Router, Switch, Redirect } from "react-router-dom";

import Home from './pages/home'
import Mapcity from './pages/mapcity'
import {localcityaction} from './store/actioncreator'
import{connect} from 'react-redux'

class App extends Component {
  componentDidMount(){
   this.props.handleinitcity()
  }
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


const mapsetcity=(dispatch)=>{
    return{
      handleinitcity(){
          dispatch(localcityaction())
      }
    }
}
export default connect(null,mapsetcity)(App) ;