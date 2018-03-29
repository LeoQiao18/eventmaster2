import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon, Dropdown } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const Landing = () => <div>Landing</div>;
const AddEvents = () => <div>AddEvents</div>;
const EditEvents = () => <div>EditEvents</div>;
const Event1 = () => <div>Event1</div>;

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

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Layout style={{ height: "100vh" }}>
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
            <Layout>
              <Header style={{ background: "#fff", padding: 0 }}>
                <Menu
                  mode="horizontal"
                  style={{ lineHeight: "64px", float: "right" }}
                >
                  <Menu.Item key="5">
                    <Dropdown overlay={loginDropdown}>
                      <a>
                        Leo Qiao <Icon type="down" />
                      </a>
                    </Dropdown>
                  </Menu.Item>
                </Menu>
              </Header>
              <Content style={{ margin: "24px 16px 0" }}>
                <div
                  style={{ padding: 24, background: "#fff", minHeight: 360 }}
                >
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/events/new" component={AddEvents} />
                  <Route exact path="/events/edit" component={EditEvents} />
                  <Route exact path="/events/1" component={Event1} />
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
