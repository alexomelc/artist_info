import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { artistUrl, artistEventsUrl } from '../api';
import Context from '../Context';
import { selectEvent } from '../actions';
import SearchInfo from '../components/SearchInfo';
import useDebounce from '../helpers';

const Search = () => {
  const [, dispatch] = useContext(Context);
  const [artistName, setArtistName] = useState('');
  const [artist, setArtist] = useState({});
  const [events, setEvents] = useState([]);
  const debouncedSearchTerm = useDebounce(artistName, 300);

  const fetchArtist = () => axios.get(artistUrl(artistName), { params: { app_id: '123' } })
    .then((response) => setArtist(response.data))
    .catch((errorArtist) => {
      console.log(errorArtist);
    });

  const fetchEvents = () => axios.get(artistEventsUrl(artistName), { params: { app_id: '123' } })
    .then((response) => setEvents(response.data))
    .catch((errorEvents) => {
      console.log(errorEvents);
    });

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchArtist();
      fetchEvents();
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (!artistName) {
      setArtist({});
      setEvents([]);
    }
  }, [artistName]);

  const handleSetArtistName = (name) => {
    setArtistName(name);
    dispatch(selectEvent({}));
  };

  return (
    <>
      <h2>Search Artist</h2>
      <TextField label="Search" variant="filled" onChange={(e) => handleSetArtistName(e.target.value)} />
      <SearchInfo artist={artist} events={events} artistName={artistName} />
    </>
  );
};

export default Search;
