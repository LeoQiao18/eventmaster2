import React, { Component } from "react";
import { Form, Input, Button, Card, DatePicker, Divider, Icon } from "antd";
import "./new-event-form.css";

const FormItem = Form.Item;

let uid = 0;

class NewEventForm extends Component {
  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    const nextKeys = keys.concat(uid++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys
    });
  };

  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }

      //TODO: format the Dat-Picker value
    });
  };

  render() {
    const { uid, onRemove } = this.props;

    const { getFieldDecorator, getFieldValue } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 8 }
      }
    };

    const buttonsLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 18, offset: 6 }
      }
    };

    getFieldDecorator("keys", { initialValue: [] });
    const keys = getFieldValue("keys");
    const eventItems = keys.map(k => {
      return (
        <FormItem {...formItemLayout} label="Event" key={k}>
          {getFieldDecorator(`events[${k}].name`, {
            rules: [
              {
                required: true,
                whitespace: true,
                message: "Please input event name"
              }
            ]
          })(
            <Input
              placeholder="event name"
              style={{ width: "60%", marginRight: 8 }}
            />
          )}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </FormItem>
      );
    });

    return (
      <Card bordered={false} style={{ marginTop: 24 }}>
        <Form hideRequiredMark onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Date" hasFeedback>
            {getFieldDecorator("date", {
              rules: [
                {
                  type: "object",
                  required: true,
                  message: "Please input the date!"
                }
              ]
            })(<DatePicker />)}
          </FormItem>
          <Divider />

          {eventItems}
          <FormItem {...buttonsLayout}>
            <Button type="dashed" onClick={this.add} style={{ width: "66%" }}>
              <Icon type="plus" /> Add event
            </Button>
          </FormItem>

          <FormItem {...buttonsLayout}>
            <div
              style={{
                width: "66%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                ghost
                type="danger"
                style={{ marginLeft: 8 }}
                onClick={() => onRemove(uid)}
              >
                Delete
              </Button>
            </div>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

export default Form.create()(NewEventForm);
