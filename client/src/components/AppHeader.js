import React from "react";
import { Layout, Menu, Dropdown, Icon } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  const loginDropdown = (
    <Menu>
      <Menu.Item key="0">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" disabled>
        3rd menu item（disabled）
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <Menu
        mode="horizontal"
        selectable={false}
        style={{ lineHeight: "64px", float: "right" }}
      >
        <Menu.Item key="1">
          <Dropdown overlay={loginDropdown}>
            <a>
              Leo Qiao <Icon type="down" />
            </a>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
