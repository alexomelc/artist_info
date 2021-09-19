import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, Typography,
} from '@mui/material';

const Venue = ({
  venue,
}) => {
  const { city, country, region } = venue;
  return (
    <Card sx={{ minWidth: 275, marginBottom: 1 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Venue
        </Typography>
        <Typography variant="h9" component="div">
          City:
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {city}
        </Typography>
        <Typography variant="h9" component="div">
          Region:
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {region}
        </Typography>
        <Typography variant="h9" component="div">
          Country:
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {country}
        </Typography>
      </CardContent>
    </Card>
  );
};

Venue.propTypes = {
  venue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default Venue;
