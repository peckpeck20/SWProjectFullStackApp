import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import IdeaIndex from "./components/idea_index";
import IdeaNew from "./components/IdeaNew";
import IdeaShow from "./components/IdeaShow";
import IdeaEdit from "./components/IdeaEdit";
import CommentIndex from "./components/comment_index";
import rootReducer from "./reducers/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="background">
          <div className="content-wrapper">
            <Link to="/">Home</Link>{' '}
            <Link to="/comments">Comments</Link>{' '}
            <Link to="/ideas/new">New Idea</Link>{' '}
            <Link to="/ideas/:id">Ideas by ID</Link>{' '}
            <Link to="/edit">Edit</Link>{' '}
            <Switch>
              <Route exact path="/" component={IdeaIndex} />
              <Route path="/comments" component={CommentIndex} />
              <Route path="/ideas/new" component={IdeaNew} />
              <Route path="/ideas/:id" component={IdeaShow} />
              <Route path="/edit" component={IdeaEdit} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
