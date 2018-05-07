import React, {Component} from 'react';
import {connect} from "react-redux";
import {reduxForm, Field, formValueSelector} from "redux-form";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import DatePicker from "material-ui/DatePicker";
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from "material-ui/RaisedButton";

const style = {
  margin: 12
};

class IdeaNew extends Component {
  renderTextField({
    input,
    label,
    meta: {
      error,
      touched
    },
    ...custom
  }) {
    return (
      <div>
        <TextField
          hintText={label}
          floatingLabelText={label}
          errorText={touched && error}
          {...input}
          {...custom}/>

      </div>
    );
  }

  renderSelectField({
    input,
    label,
    meta: {
      touched,
      error
    },
    children
  }) {
    return (<SelectField
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}/>);
  }

  renderDatePicker({
    input,
    label,
    meta: {
      touched,
      error
    },
    children
  }) {
    return (<DatePicker
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
      children={children}/>);
  }

  renderDatePickerModified({
    input,
    label,
    meta: {
      touched,
      error
    },
    children
  }) {
    return (<DatePicker
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
      children={children}/>);
  }

  render() {

    return (
      <div>
        <form>
          <Field type="text" name="title" label="title" component={this.renderTextField}/>
          <Field name="description" label="description" component={this.renderTextField}/>
          <Field name="budget" label="budget" component={this.renderTextField}/>
          <Field
            name="readyForComments"
            label="readyForComments"
            component={this.renderTextField}/>
          <Field
            name="peopleNeeded"
            label="peopleNeeded"
            component={this.renderTextField}/> {/* <Field
            name="creationDate"
            label="creationDate"
            component={this.renderTextField}/> */}
          <Field name="creationDate" component={this.renderDatePicker}/>
          <Field name="lastModified" component={this.renderDatePickerModified}/>
          <Field
            name="categoryId"
            component={this.renderSelectField}
            label="categoryId role">
            <MenuItem value="1" primaryText="Normal user"/>
            <MenuItem value="doctor" primaryText="doctor"/>
            <MenuItem value="nurse" primaryText="nurse"/>
            <MenuItem value="developer" primaryText="developer"/>
          </Field>
          <div>
            <RaisedButton label="submit" primary={true} style={style}/>
            <RaisedButton label="reset" secondary={true} style={style}/>
          </div>
        </form>

      </div>
    );
  }
}

export default reduxForm({
  // a unique name for the form
  form: 'IdeaNewForm'
})(connect(null)(IdeaNew))
