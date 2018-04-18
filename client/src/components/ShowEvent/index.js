import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Card } from "antd";

import { fetchEvent } from "../../actions";

class ShowEvent extends Component {
    state = {
        error: false
    };

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.event.err && !prevProps.event.err) {
            this.setState({ error: true });
        }
    }

    render() {
        const { event } = this.props;

        if (this.state.error) {
            return <Redirect to="/" />;
        }

        return (
            <Card bordered={false}>
                <h1>{event.name}</h1>
            </Card>
        );
    }
}

function mapStateToProps({ events, event }) {
    return { events, event };
}

export default connect(mapStateToProps, { fetchEvent })(ShowEvent);
