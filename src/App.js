import './App.css';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Query from './components/Query';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API_KEY
  state = {
    query: "",
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  setQuery = async (value) => {
    return new Promise(resolve => {
      this.setState({ query: value }, _ =>
        resolve()
      );
    });
  }

  render() {
    return (
      <Router>
        <div>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Navbar setQuery={this.setQuery} />
          <Switch>
            <Route exact path="/"><News apikey={this.apikey} setProgress={this.setProgress} key="general" pageSize={6} category='general' /></Route>
            <Route exact path="/entertainment"><News apikey={this.apikey} setProgress={this.setProgress} key="entertainment" pageSize={6} category='entertainment' /></Route>
            <Route exact path="/business"><News apikey={this.apikey} setProgress={this.setProgress} key="business" pageSize={6} category='business' /></Route>
            <Route exact path="/health"><News apikey={this.apikey} setProgress={this.setProgress} key="health" pageSize={6} category='health' /></Route>
            <Route exact path="/sports"><News apikey={this.apikey} setProgress={this.setProgress} key="sports" pageSize={6} category='sports' /></Route>
            <Route exact path="/science"><News apikey={this.apikey} setProgress={this.setProgress} key="science" pageSize={6} category='science' /></Route>
            <Route exact path="/technology"><News apikey={this.apikey} setProgress={this.setProgress} key="technology" pageSize={6} category='technology' /></Route>
            <Route exact path="/query/:id"><Query apikey={this.apikey} setProgress={this.setProgress} query={this.state.query} key={this.state.query} pageSize={6} /></Route>
          </Switch>

        </div>
      </Router>
    )
  }
}

