import React from "react";
import {
    Form,
    Input,
    Select,
    Button,
    DatePicker,
    Icon, Row, Col,
} from 'antd';


function BaseProfile(props) {
    const {Option} = Select;
    const {Search} = Input;
    const formLayout = 'horizontal';
    const {getFieldDecorator, getFieldError, isFieldTouched} = props.form;
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
    })(
        <Select style={{width: 70}}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>,
    );
    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {span: 10},
                wrapperCol: {span: 10}
            }
            : null;
    return (
        <>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Form {...formItemLayout} >

                        <Form.Item label="First Name">
                            {getFieldDecorator('note', {
                                rules: [{ required: true, message: 'Please input your First Name here!' }],
                            })(<Input placeholder="Please input your First Name!"/>)}
                        </Form.Item>

                        <Form.Item label="First Name">
                            {getFieldDecorator('note', {
                                rules: [{ required: true, message: 'Please input your Last Name here!' }],
                            })(<Input placeholder="Please input your Last Name!"/>)}
                        </Form.Item>

                        <Form.Item label="Phone Number">
                            {getFieldDecorator('phone', {
                                rules: [{required: true, message: 'Please input your phone number!'}],
                            })(<Input addonBefore={prefixSelector} style={{width: '100%'}}/>)}
                        </Form.Item>

                        <Form.Item label="E-mail">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ],
                            })(<Input/>)}
                        </Form.Item>

                        <Form.Item label="Gender">
                            {getFieldDecorator('gender', {
                                rules: [{required: true, message: 'Please select your gender!'}],
                            })(
                                <Select
                                    placeholder="Select a option and change input text above"
                                >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                    <Option value="female">Other</Option>
                                </Select>,
                            )}
                        </Form.Item>

                        <Form.Item label="Educational Level">
                            {getFieldDecorator('educationalLevel', {
                                rules: [{required: true, message: 'Please select your Educational Level!'}],
                            })(
                                <Select
                                    placeholder="Select a option and change input text above"
                                >
                                    <Option value="elementary">Elementary School</Option>
                                    <Option value="highSchool">High School</Option>
                                    <Option value="bachelor">Bacherlor's degree</Option>
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="Marital Status">
                            {getFieldDecorator('maritalStatus', {
                                rules: [{required: true, message: 'Please select your Marital Status!'}],
                            })(
                                <Select
                                    placeholder="Select a option and change input text above"
                                >
                                    <Option value="single">Single</Option>
                                    <Option value="married">Married</Option>
                                    <Option value="divorced">Divorced</Option>
                                </Select>,
                            )}
                        </Form.Item>

                        <Form.Item label="Annual Household Income">
                            {getFieldDecorator('annualHouseIncome', {
                                rules: [{required: true, message: 'Please select your Household Income!'}],
                            })(
                                <Select
                                    placeholder="Select a option and change input text above"
                                >
                                    <Option value="1000">1000</Option>
                                    <Option value="5000">5000</Option>
                                    <Option value="millionare">Millionare</Option>
                                </Select>,
                            )}
                        </Form.Item>

                    </Form>
                    <Row>
                        <Col span={10}></Col>
                        <Col span={4}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col span={10}></Col>
                    </Row>
                </Col>
                <Col span={4}></Col>
            </Row>
        </>
    );

}

const Profile = Form.create({name: 'register'})(BaseProfile);
export default Profile;