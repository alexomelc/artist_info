import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, CardMedia, Grid, Box, Link,
} from '@mui/material';

const ArtistInfo = ({ artist }) => (
  <Box sx={{ margin: 1 }}>
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item md={6}>
        <CardMedia
          component="img"
          alt="artist"
          height="200"
          image={artist.image_url}
        />
      </Grid>
      <Grid item md={6}>
        <Typography variant="h7" component="div">
          {artist.name ? artist.name : 'artist name'}
        </Typography>
        <Typography variant="h7" component="div">
          {artist.upcoming_event_count ? `${artist.upcoming_event_count} upcoming events` : '0 upcoming events'}
        </Typography>
        <Typography variant="h7" component="div">
          <Link href={artist.facebook_page_url}>Facebook</Link>
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

ArtistInfo.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
    facebook_page_url: PropTypes.string,
    upcoming_event_count: PropTypes.number,
  }),
};

ArtistInfo.defaultProps = {
  artist: {
    name: '',
    image_url: '',
    facebook_page_url: '',
    upcoming_event_count: 0,
  },
};
export default ArtistInfo;
