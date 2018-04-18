import React from "react";
import { connect } from "react-redux";
import { Layout, Menu, Dropdown, Icon, Avatar } from "antd";

const { Header } = Layout;

const AppHeader = ({ auth }) => {
  const renderDropdown = () => (
    <Menu>
      <Menu.Item key="0">
        <a>
          <Icon type="user" /> {auth.displayName}
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a>
          <Icon type="inbox" /> {auth.email}
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <a href="/api/logout">
          <Icon type="poweroff" /> Log out
        </a>
      </Menu.Item>
    </Menu>
  );

  const renderLogin = () => (
    <Menu
      mode="horizontal"
      selectable={false}
      style={{ lineHeight: "64px", float: "right" }}
    >
      <Menu.Item key="1">
        <Dropdown trigger={["click"]} overlay={renderDropdown()}>
          <Avatar src={auth.image} />
        </Dropdown>
      </Menu.Item>
    </Menu>
  );

  const checkAuthRender = auth ? renderLogin() : null;

  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      {checkAuthRender}
    </Header>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(AppHeader);
