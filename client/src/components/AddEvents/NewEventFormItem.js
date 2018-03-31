import React, { Component } from "react";
import { Form, Input, Icon, Button } from "antd";

const FormItem = Form.item;

let uid = 0;

class NewEventFormItem extends Component {
  render() {
    return <FormItem />;
  }
}

export default Form.create()(NewEventFormItem);
