import React, { Component } from "react";
import { Card, Button, Icon } from "antd";

import NewEventForm from "./NewEventForm";

let uid = 0;

class AddEvents extends Component {
  constructor(props) {
    super(props);
    this.removeForm = this.removeForm.bind(this);
    this.addForm = this.addForm.bind(this);

    this.state = {
      forms: [uid++]
    };
  }

  addForm() {
    const updatedForms = this.state.forms;
    updatedForms.splice(0, 0, uid++);
    this.setState({ forms: updatedForms });
  }

  removeForm(formUid) {
    this.setState({ forms: this.state.forms.filter(id => id !== formUid) });
  }

  renderForms() {
    return this.state.forms.map(formUid => (
      <NewEventForm key={formUid} uid={formUid} onRemove={this.removeForm} />
    ));
  }

  render() {
    return (
      <div>
        <Card bordered={false}>
          <h1 style={{ display: "inline", marginRight: 24 }}>Add Events</h1>
          <Button
            type="dashed"
            size="large"
            style={{ float: "right" }}
            onClick={this.addForm}
          >
            <Icon type="plus" /> Form
          </Button>
        </Card>
        {this.renderForms()}
      </div>
    );
  }
}

export default AddEvents;
