import React from "react";
import PropTypes from "prop-types";


function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='organizer'
          deafaultValue={props.organizer} >
        </input>
        <input
          type='text'
          name='groupName'
          defaultValue='groupName'>
        </input>
        <input
          type="number"
          pattern="[0-9]*"
          // onInput={this.handleChange.bind(this)}
          name='groupSize'
          placeholder="e.g.: 12">
        </input>
        <input
          type='date'
          name='visitDate'
          placeholder="">
        </input>
        <textarea
          type='text'
          name='activities'
          value='activities'>
        </textarea>
        <textarea
          type='text'
          name='notes'
          value='notes'>
        </textarea>
        <input
          type='email'
          name='email'
          placeholder="email@email.com">
        </input>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;