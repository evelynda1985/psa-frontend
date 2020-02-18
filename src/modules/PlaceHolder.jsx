import React, {useState, useEffect, useDebugValue} from 'react';
import {
    Table,
    Divider,
    Tag,
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    Row,
    Col,
    Modal,
    Layout
} from "antd";
const {Header, Footer, Content} = Layout;

const PlaceHolder = (props) => {
    const {col_left,col_righ}=props

    return (<>

        <Layout  >

            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
            >
                <Row >
                    <Col span={col_left}></Col>
                    <Col span={col_righ}>{props.children}</Col>
                </Row>
            </Content>
        </Layout>

    </>);
}
export default PlaceHolder;
