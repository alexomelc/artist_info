import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardActions, Button, Typography,
} from '@mui/material';

const EventInfo = ({
  title,
  date,
  lineup,
  url,
}) => {
  const parseDate = (dateValue) => new Date(dateValue).toLocaleString(undefined, {
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit',
  });

  const handleClick = () => {
    window.open(url);
  };
  return (
    <Card sx={{ minWidth: 275, marginBottom: 1 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Event
        </Typography>
        <Typography variant="h9" component="div">
          Title:
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h9" component="div">
          Date:
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {parseDate(date)}
        </Typography>
        <Typography variant="h9" component="div">
          Lineup:
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {lineup.join(', ')}
        </Typography>
        <CardActions>
          <Button onClick={handleClick} size="small">More information</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

EventInfo.propTypes = {
  lineup: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default EventInfo;
