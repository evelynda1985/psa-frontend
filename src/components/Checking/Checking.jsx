import React from "react";
import {Button, DatePicker, Form, Input, Checkbox } from "antd";

export default function Checking(props){
    const  formLayout  = 'horizontal';
    const formItemLayout =
        formLayout === 'horizontal'
            ?{
                labelCol: { span: 5 },
                wrapperCol: { span: 10,  offset: 9 }
            }
            : null;

    return (
        <>
            <Form {...formItemLayout} >
                <Form.Item {...formItemLayout}>
                    <Checkbox >Checking my attendance to the event</Checkbox>
                </Form.Item>
            </Form>
        </>
    );
}