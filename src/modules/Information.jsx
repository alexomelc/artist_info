import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Context from '../Context';
import EventInfo from '../components/EventInfo';
import SpecialOffers from '../components/SpecialOffers';
import Venue from '../components/Venue';
import { addEventToFavorites, removeEventFromFavorites } from '../actions';

const Information = () => {
  const [state, dispatch] = useContext(Context);
  const { selectedEvent, favorites } = state;

  const handleAddEventToFavorites = () => {
    const event = {
      id: selectedEvent.id,
      title: selectedEvent.title,
    };
    localStorage.setItem('favorites', JSON.stringify([event, ...favorites]));
    dispatch(addEventToFavorites(event));
  };

  const handleRemoveEventFromFavorites = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites.filter((favoriteEvent) => favoriteEvent.id !== selectedEvent.id)));
    dispatch(removeEventFromFavorites(selectedEvent.id));
  };

  const isEventInFavorites = !!favorites.find((favorite) => favorite.id === selectedEvent.id);

  return (Object.keys(selectedEvent).length !== 0 && (
    <>
      <h2>Seleted Event Information</h2>
      <EventInfo
        title={selectedEvent.title}
        date={selectedEvent.datetime}
        lineup={selectedEvent.lineup}
        url={selectedEvent.url}
      />
      <Venue venue={selectedEvent.venue} />
      <SpecialOffers offers={selectedEvent.offers} />
      {!isEventInFavorites
        ? <Button variant="outlined" onClick={handleAddEventToFavorites}>Add to favorites</Button>
        : <Button variant="outlined" onClick={handleRemoveEventFromFavorites}>Remove from favorites</Button>}
    </>
  ));
};

export default Information;
