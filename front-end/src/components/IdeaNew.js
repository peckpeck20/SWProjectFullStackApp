import React, {Component} from 'react';
import NewIdeaForm from './NewIdeaForm';
import axios from "axios";

class IdeaNew extends Component {
    //post to db
    handleFormSubmit = values => {

        axios.post("http://localhost:8000/api/idea", values)

    };

    render() {
        return (
            <div>
                <NewIdeaForm onSubmit={this.handleFormSubmit}/>
            </div>
        );
    }
}

export default IdeaNew;