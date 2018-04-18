import React from "react";
import {connect} from 'react-redux';

const ShowEvent = ({ match }) => {
  console.log(match);
  return (
    <div>
      <span>Event {match.params.eventId}</span>
    </div>
  );
};

function mapStateToProps({events}) {
  for (let i = 0; i < events.)
}

export default connect()(ShowEvent);
