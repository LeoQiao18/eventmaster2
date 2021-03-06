import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const { Sider } = Layout;

const AppSider = ({ events, match, location }) => {
  const renderEventLinks = () =>
    events.map(event => {
      return (
        <Menu.Item key={`/events/${event._id}`}>
          <Link
            to={`/events/${event._id}`}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            <Icon type="schedule" />
            <span>{event.name}</span>
          </Link>
        </Menu.Item>
      );
    });
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
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.ItemGroup title="Admin">
          <Menu.Item key="/events/new">
            <Link to="/events/new">
              <Icon type="form" />
              <span>Add Events</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/events/edit">
            <Link to="/events/edit">
              <Icon type="table" />
              <span>Edit Events</span>
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Events">{renderEventLinks()}</Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};

function mapStateToProps({ events }) {
  return { events };
}

export default withRouter(connect(mapStateToProps)(AppSider));
