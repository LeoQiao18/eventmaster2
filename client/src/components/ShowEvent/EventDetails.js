import React from "react";
import moment from "moment";
import { Divider, Avatar } from "antd";

const EventDetails = ({ event }) => {
  const renderFaculty = () => {
    if (event.faculty) {
      return (
        <p>
          <strong>Faculty: </strong>
          {event.faculty}
        </p>
      );
    }
  };

  const renderDescription = () => {
    if (event.description) {
      return (
        <p>
          <strong>Description: </strong>
          {event.description}
        </p>
      );
    }
  };

  const renderParticipants = () => {
    return event.participants.map(participant => {
      return (
        <span key={participant._id} style={{ margin: 16, float: "left" }}>
          <Avatar size="large" src={participant.image} />
          <span style={{ marginLeft: 8 }}>{participant.displayName}</span>
        </span>
      );
    });
  };

  return (
    <div>
      <p>
        <strong>Date: </strong>
        {moment(event.date, "YYYYMMDD").format("dddd, MMMM Do YYYY")}
      </p>
      <p>
        <strong>Time: </strong>
        {moment(event.startTime, "HH:mm").format("h:mm a")} -{" "}
        {moment(event.endTime, "HH:mm").format("h:mm a")}
      </p>
      <p>
        <strong>Limit: </strong>
        {event.limit} students
      </p>
      {renderFaculty()}
      {renderDescription()}
      <Divider>People who have signed up</Divider>
      {renderParticipants()}
    </div>
  );
};

export default EventDetails;
