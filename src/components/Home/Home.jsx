import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from 'antd';
import MainMenu from "../../modules/MainMenu";
import ShareComponents from "../../modules/ShareComponents";


const { Header, Content, Footer, Sider } = Layout;

export default function Home(props){
    const {state,onCollapse} = {...props};
    return (
        <Router>
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={state.collapsed}
                    onCollapse={onCollapse}
                >
                    <div className="logo" />
                    <MainMenu {...props} />
                </Sider>
                <Layout>
                    <Header style={{ background: "#fff", padding: 0 }} />
                    <Content style={{ margin: "0 16px" }}>
                        <ShareComponents {...props} />
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>

            </Layout>
        </Router>
    );

}