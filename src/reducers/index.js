import {
  ADD_EVENT_TO_FAVORITES,
  REMOVE_EVENT_FROM_FAVORITES,
  SET_EVENT_TO_FAVORITES,
  SELECT_EVENT,
} from '../actions/action-types';

const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_EVENT:
      return {
        ...state,
        selectedEvent: action.payload.event,
      };
    case SET_EVENT_TO_FAVORITES:
      return {
        ...state,
        favorites: action.payload.favorites,
      };
    case ADD_EVENT_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.event],
      };
    case REMOVE_EVENT_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (event) => event.id !== action.payload.eventId,
        ),
      };
    default:
      return state;
  }
};
export default reducer;
