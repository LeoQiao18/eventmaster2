import React, { Component } from "react";
import { Card } from "antd";
import EventsTable from "./EventsTable";

class EditEvents extends Component {
  render() {
    return (
      <Card bordered={false}>
        <h1>Edit Events</h1>
        <EventsTable />
      </Card>
    );
  }
}

export default EditEvents;
