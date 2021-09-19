import React, {
  useEffect, useContext, Fragment, useState,
} from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import Context from '../Context';
import { setEventToFavorites, removeEventFromFavorites } from '../actions';

const Favorites = () => {
  const [state, dispatch] = useContext(Context);
  const [favoritesFromLocalStorage, setFavoritesFromLocalStorage] = useState([]);
  const { favorites } = state;

  useEffect(() => {
    const getFavoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites'));
    setFavoritesFromLocalStorage(getFavoritesFromLocalStorage);
  }, []);

  useEffect(() => {
    if (favoritesFromLocalStorage !== null) {
      dispatch(setEventToFavorites(favoritesFromLocalStorage));
    }
  }, [favoritesFromLocalStorage]);

  const handleRemoveEventFromFavorites = (eventId) => {
    localStorage.setItem('favorites', JSON.stringify(favoritesFromLocalStorage.filter((event) => event.id !== eventId)));
    dispatch(removeEventFromFavorites(eventId));
  };

  return (favorites.length !== 0 && (
    <>
      <h2>Favorites</h2>
      {favorites.map((event, index) => (
        <Card sx={{ minWidth: 50, marginBottom: 1 }} key={event.id}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <StarIcon />
            <Typography sx={{ margin: 2 }} variant="h6" component="span">
              {event.title || <i>No event name</i>}
            </Typography>
            #
            {index + 1}
            <DeleteIcon onClick={() => handleRemoveEventFromFavorites(event.id)} />
          </CardContent>
        </Card>
      )) }
    </>
  ));
};

export default Favorites;
