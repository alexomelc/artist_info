import {
  SELECT_EVENT,
  ADD_EVENT_TO_FAVORITES,
  REMOVE_EVENT_FROM_FAVORITES,
  SET_EVENT_TO_FAVORITES,
} from './action-types';

export const selectEvent = (event) => ({
  type: SELECT_EVENT,
  payload: {
    event,
  },
});

export const setEventToFavorites = (favorites) => ({
  type: SET_EVENT_TO_FAVORITES,
  payload: {
    favorites,
  },
});

export const addEventToFavorites = (event) => ({
  type: ADD_EVENT_TO_FAVORITES,
  payload: {
    event,
  },
});

export const removeEventFromFavorites = (eventId) => ({
  type: REMOVE_EVENT_FROM_FAVORITES,
  payload: {
    eventId,
  },
});
