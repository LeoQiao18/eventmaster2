import React, { Component } from "react";
import { Card, Button, Icon } from "antd";

import NewEventsForm from "./NewEventsForm";

let uid = 0;

class AddEvents extends Component {
    constructor(props) {
        super(props);
        this.onFormRemove = this.onFormRemove.bind(this);
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

    onFormRemove(formUid) {
        const i = this.state.forms.indexOf(formUid);

        if (i > -1) {
            const tmpArray = this.state.forms;
            const updatedForms = tmpArray
                .slice(0, i)
                .concat(tmpArray.slice(i + 1));
            this.setState({ forms: updatedForms });
        }
    }

    renderForms() {
        return this.state.forms.map(formUid => (
            <NewEventsForm
                key={formUid}
                uid={formUid}
                onRemove={this.onFormRemove}
            />
        ));
    }

    render() {
        return (
            <div>
                <Card bordered={false}>
                    <h1 style={{ display: "inline", marginRight: 24 }}>
                        Add Events
                    </h1>
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
