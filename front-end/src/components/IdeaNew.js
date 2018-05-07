import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ideaCreate} from "../actions/actions";

const Style = {
  heading: {
    margin: '0px 350px 0px 0px'
  },
  button: {
    margin: '20px 5px'
  }
};

class IdeaNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newIdea: {
        title: '',
        description: '',
        budget: '',
        readyForComments: "false",
        peopleNeeded: '',
        categoryId: ''
      }
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    let newIdea = this.state.newIdea;

    console.log(newIdea);

    if (newIdea.title !== '' && newIdea.description !== '' && newIdea.budget !== '' && newIdea.peopleNeeded !== '' && newIdea.categoryId !== '') {
      this
        .props
        .ideaCreate(newIdea);
      window.location = "/";
    } else {
      alert('No field can be empty!');
    }
  };

  render() {

    return (
      <div className="container">
        <h3 style={Style.heading}>NEW IDEA</h3>
        <form onSubmit={this.onSubmit}>
          <p>Title</p>
          <input
            name="title"
            value={this.state.newIdea.title}
            onChange={this.inputChanged}/>
          <p>Description</p>
          <input
            name="description"
            value={this.state.newIdea.description}
            onChange={this.inputChanged}/>
          <p>Budget</p>
          <input
            type="number"
            name="budget"
            value={this.state.newIdea.budget}
            onChange={this.inputChanged}/>
          <p>Ready for comment?
            <span>
              <select
                name="readyForComments"
                value={this.state.newIdea.readyForComments}
                onChange={this.inputChanged}>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </span>
          </p>
          <p>People needed</p>
          <input
            type="number"
            name="peopleNeeded"
            value={this.state.newIdea.peopleNeeded}
            onChange={this.inputChanged}/>
          <p>Category id</p>
          <input
            type="number"
            name="categoryId"
            value={this.state.newIdea.categoryId}
            onChange={this.inputChanged}/>
          <br/>

          <button
            type="submit"
            className="button button-edit button-text"
            style={Style.button}>
            ADD
          </button>

          <Link to="/">
            <button className="button button-delete button-text" style={Style.button}>
              CANCEL
            </button>
          </Link>
        </form>
      </div>
    );
  }

  inputChanged = (event) => {
    console.log(this.state.newIdea);
    this.setState({
      newIdea: Object.assign({}, this.state.newIdea, {
        [event.target.name]: event.target.value
      })
    });
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ideaCreate: (newIdea) => ideaCreate(newIdea, dispatch)
  };
}

export default connect(mapDispatchToProps)(IdeaNew);
