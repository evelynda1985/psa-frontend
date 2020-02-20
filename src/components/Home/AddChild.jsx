import React from "react";
import {
    Form,
    Input,
    Select,
    Button,
    DatePicker, Col, Row,
} from 'antd';
import PSALogo from "../PSALogo/PSALogo";


function AddChildForm(props) {
    const formLayout = 'horizontal';
    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = props.form;
    const {Option} = Select;
    const {Search} = Input;
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    const config = {
        rules: [{type: 'object', required: true, message: 'Please select time!'}],
    };

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {span: 10},
                wrapperCol: {span: 10}
            }
            : null;
    return (
        <>
            <div >
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Form onSubmit={handleSubmit}  {...formItemLayout}>

                        <Form.Item label="Name">
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Please input your First Name here!' }],
                            })(<Input placeholder="First Name"/>)}
                        </Form.Item>

                            <Form.Item label="Birth Date">
                                {getFieldDecorator('date-picker', config)(<DatePicker />)}
                            </Form.Item>

                        <Form.Item label="Gender">
                            {getFieldDecorator('gender', {
                                rules: [{required: true, message: 'Please select your gender!'}],
                            })(
                                <Select
                                    placeholder="Gender"
                                >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                    <Option value="female">Other</Option>
                                </Select>,
                            )}
                        </Form.Item>

                        <Form.Item label="School Grade">
                            {getFieldDecorator('educationalLevel', {
                                rules: [{required: true, message: 'Please select the School grade of the child'}],
                            })(
                                <Select
                                    placeholder="School Grade"
                                >
                                    <Option value="elementary">Elementary School</Option>
                                    <Option value="highSchool">High School</Option>
                                    <Option value="bachelor">Bacherlor's degree</Option>
                                </Select>,
                            )}
                        </Form.Item>

                        <Form.Item label="School City" hasFeedback>
                            {getFieldDecorator('educationalLevel', {
                                rules: [{required: true, message: 'Please select the School grade of the child'}],
                            })(
                            <Search
                                placeholder="School City"
                                enterButton="Search"
                                size="large"
                                onSearch={value => console.log(value)}
                            />
                            )}
                        </Form.Item>

                        <Form.Item label="School Name" hasFeedback>
                            {getFieldDecorator('educationalLevel', {
                                rules: [{required: true, message: 'Please select the School grade of the child'}],
                            })(
                            <Search
                                placeholder="School Name"
                                enterButton="Search"
                                size="large"
                                onSearch={value => console.log(value)}
                            />
                            )}
                        </Form.Item>

                        <Row>
                            <Col span={10}></Col>
                            <Col span={4}>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Save
                                    </Button>
                                </Form.Item>
                            </Col>
                            <Col span={10}></Col>
                        </Row>
                    </Form>

                </Col>
                <Col span={4}></Col>
            </Row>
            </div>
        </>
    );

}

const AddChild = Form.create({name: 'addChild'})(AddChildForm);
export default AddChild;