import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Divider } from '@mui/material';

const Event = ({
  title = '',
  id,
  showEvent,
}) => (
  <>
    <ListItem button onClick={() => showEvent(id)}>
      <ListItemText primary={title || <i>No event name</i>} />
    </ListItem>
    <Divider />
  </>
);

Event.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  showEvent: PropTypes.func.isRequired,
};
export default Event;
