import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Layout } from "antd";
import { fetchUser, fetchEvents } from "../actions";

import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import AppFooter from "./AppFooter";
import AppContent from "./AppContent";

import AddEvents from "./AddEvents";
import EditEvents from "./EditEvents";
import ShowEvent from "../components/ShowEvent";

const Landing = () => <div>Landing</div>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchEvents();
  }

  componentDidUpdate() {
    if (this.props.auth === false) {
      window.location.replace("/login");
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Layout style={{ height: "100vh" }}>
              <AppSider />
              <Layout style={{ height: "100vh" }}>
                <AppHeader />
                <AppContent>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/events/new" component={AddEvents} />
                  <Route exact path="/events/edit" component={EditEvents} />
                  <Route exact path="/events/:eventId" component={ShowEvent} />
                </AppContent>
                <AppFooter />
              </Layout>
            </Layout>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser, fetchEvents })(App);
