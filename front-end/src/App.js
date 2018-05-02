import React, { Component } from "react";
import logo from "./logo.svg";
import { Router, BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import IdeaIndex from "./components/ideaIndex";
import IdeaNew from "./components/ideaNew";
import IdeaShow from "./components/ideaShow";
import IdeaEdit from "./components/ideaEdit";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="background">
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/" component={IdeaIndex} />
              <Route path="/ideas/new" component={IdeaNew} />
              <Route path="/ideas/:id" component={IdeaShow} />
              <Route path="/edit" component={IdeaEdit} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
