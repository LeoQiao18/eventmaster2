import React, { Component } from "react";
import { Card } from "antd";

class NewEventsForm extends Component {
    render() {
        const { uid, onRemove } = this.props;

        return (
            <Card bordered={false} style={{ marginTop: 24 }}>
                Form id: {uid}{" "}
                <button onClick={() => onRemove(uid)}>Delete</button>
            </Card>
        );
    }
}

export default NewEventsForm;
