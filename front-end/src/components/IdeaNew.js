import React, {Component} from 'react';
import NewIdeaForm from './NewIdeaForm';

class IdeaNew extends Component {

    handleFormSubmit = values => {
        console.log(values);
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