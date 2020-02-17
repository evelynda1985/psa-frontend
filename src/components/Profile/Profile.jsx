import React from "react";
import {
    Form,
    Input,
    Select,
    Button,
    DatePicker,
} from 'antd';


export default function Profile(props) {
    const { Option } = Select;
    const { Search } = Input;
    const  formLayout  = 'horizontal';
    const formItemLayout =
        formLayout === 'horizontal'
            ?{
                labelCol: { span: 5 },
                wrapperCol: { span: 10,  offset: 2 }
            }
            : null;
    return (
        <>
            <Form {...formItemLayout} >
                <Form.Item label="Name" {...formItemLayout}>
                    <Input placeholder="input Name of the child" />
                </Form.Item>
                <Form.Item label="Birth Date">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Gender" hasFeedback>
                    <Select placeholder="Please select gender of the child">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="School Grade" hasFeedback>
                    <Select placeholder="Please select the School grade of the child">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="School Name" hasFeedback>
                    <Search
                        placeholder="input school Name here"
                        enterButton="Search"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );

}