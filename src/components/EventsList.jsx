import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Event from './Event';

const EventList = ({
  events,
  showEvent,
}) => (
  <List>
    {events.map((event) => (
      <Event
        key={event.id}
        showEvent={showEvent}
        id={event.id}
        title={event.title}
      />
    ))}
  </List>
);
EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      artistname: PropTypes.string,
      app_id: PropTypes.string,
      date: PropTypes.string,
    }),
  ),
  showEvent: PropTypes.func.isRequired,
};

EventList.defaultProps = {
  events: [{ artistname: '', app_id: '', date: '' }],
};
export default EventList;
