import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Layout>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
            >
              <div
                style={{
                  height: 32,
                  background: "rgba(255,255,255,.2)",
                  margin: 16
                }}
              />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span className="nav-text">nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span className="nav-text">nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span className="nav-text">nav 3</span>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="user" />
                  <span className="nav-text">nav 4</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: "#fff", padding: 0 }} />
              <Content style={{ margin: "24px 16px 0" }}>
                <div
                  style={{ padding: 24, background: "#fff", minHeight: 360 }}
                >
                  content
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                EventMaster2 ©2018 Created by Leo Qiao
              </Footer>
            </Layout>
          </Layout>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
