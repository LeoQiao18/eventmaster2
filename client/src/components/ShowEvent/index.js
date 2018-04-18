import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Card, Divider } from "antd";

import EventDetails from "./EventDetails";

import { fetchEvent } from "../../actions";

class ShowEvent extends Component {
  state = {
    loading: true,
    error: false
  };

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.event.err && !prevProps.event.err) {
      this.setState({ error: true });
    }
    if (this.props.match.params.eventId !== prevProps.match.params.eventId) {
      this.fetch();
    }
  }

  fetch() {
    this.setState({ loading: true }, () => {
      this.props.fetchEvent(this.props.match.params.eventId, () => {
        this.setState({ loading: false });
      });
    });
  }

  render() {
    const { event } = this.props;

    if (this.state.error) {
      return <Redirect to="/" />;
    }

    return (
      <Card bordered={false} loading={this.state.loading}>
        <h1>{event.name}</h1>
        <Divider>Details</Divider>
        <EventDetails event={event} />
      </Card>
    );
  }
}

function mapStateToProps({ events, event }) {
  return { events, event };
}

export default connect(mapStateToProps, { fetchEvent })(ShowEvent);
