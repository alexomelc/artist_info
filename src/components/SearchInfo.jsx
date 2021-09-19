import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';
import { selectEvent } from '../actions';
import ArtistInfo from './ArtistInfo';
import EventsList from './EventsList';

const SearchInfo = ({ artist, events }) => {
  const [, dispatch] = useContext(Context);
  const showEvent = (eventId) => {
    const selectedEvent = events.find((event) => event.id === eventId);
    dispatch(selectEvent(selectedEvent));
  };
  const artistComponent = Object.keys(artist).length !== 0
    ? <ArtistInfo artist={artist} />
    : <div>No artists were found</div>;
  const eventsComponent = events.length !== 0
    ? <EventsList events={events} showEvent={showEvent} />
    : <div>No events were found</div>;
  return (
    <>
      {artistComponent}
      {eventsComponent}
    </>
  );
};

SearchInfo.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      artistname: PropTypes.string,
      app_id: PropTypes.string,
      date: PropTypes.string,
    }),
  ),
  artist: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
  }),
};

SearchInfo.defaultProps = {
  events: [{ artistname: '', app_id: '', date: '' }],
  artist: {
    name: '',
    image_url: '',
  },
};
export default SearchInfo;
