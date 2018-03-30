import React, { Component } from "react";

const NewEventsForm = ({ uid, onRemove }) => (
  <div>
    Form id: {uid} <button onClick={() => onRemove(uid)}>Delete</button>
  </div>
);

let uid = 0;

class AddEvents extends Component {
  constructor(props) {
    super(props);
    this.onFormRemove = this.onFormRemove.bind(this);
    this.addForm = this.addForm.bind(this);

    this.state = {
      forms: []
    };
  }

  addForm() {
    const updatedForms = this.state.forms;
    updatedForms.push(uid++);
    this.setState({ forms: updatedForms });
  }

  onFormRemove(formUid) {
    const i = this.state.forms.indexOf(formUid);

    if (i > -1) {
      const tmpArray = this.state.forms;
      const updatedForms = tmpArray.slice(0, i).concat(tmpArray.slice(i + 1));
      this.setState({ forms: updatedForms });
    }
  }

  renderForms() {
    return this.state.forms.map(formUid => (
      <NewEventsForm key={formUid} uid={formUid} onRemove={this.onFormRemove} />
    ));
  }

  render() {
    return (
      <div>
        <h1>Add Events</h1>
        <button onClick={this.addForm}>Add Form</button>
        {this.renderForms()}
      </div>
    );
  }
}

export default AddEvents;
