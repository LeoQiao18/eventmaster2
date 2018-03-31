import React, { Component } from "react";
import {
    Form,
    Input,
    Button,
    Card,
    DatePicker,
    TimePicker,
    Divider,
    Icon,
    Row,
    Col
} from "antd";
import moment from "moment";
import "./new-event-form.css";

const FormItem = Form.Item;
const { TextArea } = Input;

let uid = 0;

class NewEventForm extends Component {
    componentDidMount() {
        const { form } = this.props;
        const keys = form.getFieldValue("keys");
        const nextKeys = keys.concat(uid++);
        form.setFieldsValue({
            keys: nextKeys
        });
    }

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
                sm: { span: 4 },
                md: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
                md: { span: 18 }
            }
        };

        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
                md: { span: 18, offset: 6 }
            }
        };

        getFieldDecorator("keys", { initialValue: [] });
        const keys = getFieldValue("keys");
        const eventItems = keys.map(k => {
            const eventFormItemLayout = {
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 20 },
                    md: { span: 18 }
                }
            };
            const format = "HH:mm";

            return (
                <FormItem {...formItemLayout} label="Event" key={k}>
                    <FormItem {...eventFormItemLayout} hasFeedback>
                        {getFieldDecorator(`events[${k}].time`, {
                            rules: [
                                {
                                    required: true,
                                    message: "Time required!"
                                }
                            ]
                        })(<TimePicker format={format} />)}
                    </FormItem>

                    <FormItem {...eventFormItemLayout} hasFeedback>
                        {getFieldDecorator(`events[${k}].name`, {
                            rules: [
                                {
                                    required: true,
                                    whitespace: true,
                                    message: "Name required!"
                                }
                            ]
                        })(<Input placeholder="name" />)}
                    </FormItem>

                    <FormItem {...eventFormItemLayout} hasFeedback>
                        {getFieldDecorator(`events[${k}].faculty`, {})(
                            <Input placeholder="faculty (optional)" />
                        )}
                    </FormItem>

                    <FormItem {...eventFormItemLayout} hasFeedback>
                        {getFieldDecorator(`events[${k}].description`, {})(
                            <TextArea placeholder="description (optional)" />
                        )}
                    </FormItem>

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
                    <FormItem {...formItemLayoutWithOutLabel}>
                        <Row>
                            <Col xs={24} sm={20} md={18} lg={18}>
                                <Button
                                    type="dashed"
                                    onClick={this.add}
                                    style={{ width: "100%" }}
                                >
                                    <Icon type="plus" /> Add event
                                </Button>
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem {...formItemLayoutWithOutLabel}>
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
                    </FormItem>
                </Form>
            </Card>
        );
    }
}

export default Form.create()(NewEventForm);
