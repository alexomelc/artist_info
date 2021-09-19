import {
  Card, CardContent, CardActions, Button, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const SpecialOffers = ({
  offers,
}) => {
  const handleClick = (url) => {
    window.open(url);
  };
  return (
    <Card sx={{ minWidth: 275, marginBottom: 1 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Special Offers
        </Typography>
        {offers.map((offer, index) => (
          <Fragment key={offer.type}>
            <Typography variant="h9" component="div">
              #
              {index + 1}
            </Typography>
            <Typography variant="h9" component="div">
              Type:
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {offer.type}
            </Typography>
            <Typography variant="h9" component="div">
              Status:
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {offer.status}
            </Typography>
            <CardActions>
              <Button onClick={() => handleClick(offer.url)} size="small">More information</Button>
            </CardActions>
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

SpecialOffers.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SpecialOffers;
