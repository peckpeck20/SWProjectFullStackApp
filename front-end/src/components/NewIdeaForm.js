import React from "react";
import {reduxForm, Field} from "redux-form";
import {ideaCreate} from "../actions/actions";
import submit from './RemoteSubmitButton'
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import DatePicker from "material-ui/DatePicker";
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from "material-ui/RaisedButton";
import RemoteSubmitButton from "./RemoteSubmitButton";
// import {connect} from "react-redux";

const style = {
    margin: 12
};

// inputChanged = (event) => {   // console.log(this.state.newIdea);
// this.setState({     newIdea: Object.assign({}, this.state.newIdea, {
// [event.target.name]: event.target.value     })   }); } onSubmit = (e) => {
// e.preventDefault();   this     .props     .ideaCreate(newIdea); }

const renderTextField = ({
    input,
    label,
    meta: {
        touched,
        error
    },
    ...custom
}) => (<TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}/>)

const renderSelectField = ({
    input,
    label,
    meta: {
        touched,
        error
    },
    children,
    ...custom
}) => (<SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}/>)

const renderDatePicker = ({
    input,
    label,
    meta: {
        touched,
        error
    },
    children
}) => (<DatePicker
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    hintText="creationDate"
    mode="landscape"
    value={input.value !== ''
    ? new Date(input.value)
    : null}
    onChange={(event, value) => {
    console.log(value);
    input.onChange(value)
}}
    children={children}/>)

const renderDatePickerModified = ({
    input,
    label,
    meta: {
        touched,
        error
    },
    children
}) => (<DatePicker
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    hintText="dateModified"
    mode="landscape"
    value={input.value !== ''
    ? new Date(input.value)
    : null}
    onChange={(event, value) => {
    console.log(value);
    input.onChange(value)
}}
    children={children}/>)

const NewIdeaForm = props => {
    const {handleSubmit} = props

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field type="text" name="title" label="title" component={renderTextField}/>
                <Field name="description" label="description" component={renderTextField}/>
                <Field name="budget" label="budget" component={renderTextField}/>
                <Field
                    name="readyForComments"
                    label="readyForComments"
                    component={renderTextField}/>
                <Field name="peopleNeeded" label="peopleNeeded" component={renderTextField}/>
                <Field name="creationDate" component={renderDatePicker}/>
                <Field name="lastModified" component={renderDatePickerModified}/>
                <Field name="categoryId" component={renderSelectField} label="categoryId role">
                    <MenuItem value="1" primaryText="Normal user"/>
                    <MenuItem value="doctor" primaryText="doctor"/>
                    <MenuItem value="nurse" primaryText="nurse"/>
                    <MenuItem value="developer" primaryText="developer"/>
                </Field>
                <div>
                    <RaisedButton type="submit" label="submit" primary={true} style={style}/>
                    <RaisedButton label="reset" secondary={true} style={style}/> {/* <RemoteSubmitButton/> */}
                </div>
            </form>

        </div>
    );
}

export default reduxForm({
    // a unique name for the form
    form: 'NewIdea',
    destroyOnUnmount: false,
    onSubmit: submit
})(NewIdeaForm)
