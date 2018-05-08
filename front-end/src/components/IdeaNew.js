import React, { Component } from 'react';
import NewIdeaForm from './NewIdeaForm';
import axios from "axios";
import { connect } from 'react-redux';
import { ideaCreate } from "../actions/actions";
import { Redirect } from 'react-router-dom';

class IdeaNew extends Component {
  //post to db
  /*handleFormSubmit = values => {

      axios.post("http://localhost:8000/api/idea", values)

  };*/

  render() {
    return (
      <div>
        <NewIdeaForm onSubmit={this.props.ideaCreate} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    ideaCreate: (newIdea) => ideaCreate(newIdea, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaNew);

