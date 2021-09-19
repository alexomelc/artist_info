import React, { useReducer } from 'react';
import { Grid, Box } from '@mui/material';
import Context from './Context';
import reducer from './reducers';
import Search from './modules/Search';
import Information from './modules/Information';
import Favorites from './modules/Favorites';

const initialState = {
  selectedEvent: {},
  favorites: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Box>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="top"
      >
        <Context.Provider value={[state, dispatch]}>
          <Grid item md={4}>
            <Search />
          </Grid>
          <Grid item md={4}>
            <Information />
          </Grid>
          <Grid item md={4}>
            <Favorites />
          </Grid>
        </Context.Provider>
      </Grid>
    </Box>
  );
}

export default App;
