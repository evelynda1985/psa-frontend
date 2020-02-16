import React from "react";

import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

export default function MainMenu(props) {
  return (
    <>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="rocket" />
            <span>Home</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/addchild">
            <Icon type="rocket" />
            <span>Add Child</span>
          </Link>
        </Menu.Item>


        <Menu.Item key="3">
          <Link to="/checking">
            <Icon type="rocket" />
            <span>Checking</span>
          </Link>
        </Menu.Item>



        <Menu.Item key="10" onClick={props.logout}>
          <Icon type="logout" />
          <span>Logout</span>        
        </Menu.Item>

      </Menu>
    </>
  );
}
