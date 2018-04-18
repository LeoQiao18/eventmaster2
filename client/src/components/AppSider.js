import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import { connect } from "react-redux";

const { Sider } = Layout;

const AppSider = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          height: 32,
          background: "rgba(255,255,255,.2)",
          margin: 16,
          textAlign: "center"
        }}
      />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.ItemGroup title="Admin">
          <Menu.Item key="1">
            <Link to="/events/new">
              <Icon type="user" />
              <span>Add Events</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/events/edit">
              <Icon type="user" />
              <span>Edit Events</span>
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Events">
          <Menu.Item key="3">
            <Link to="/events/1">
              <Icon type="user" />
              <span>Event 1</span>
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};

export default connect()(AppSider);
