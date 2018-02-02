import { object } from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import GrainContainer from '../containers/GrainContainer';
import RecipeTargetsContainer from '../containers/RecipeTargetsContainer';

const styleSheet = createStyleSheet('App', {
  flex: {
    flex: 1,
  },
});

function App({ classes }) {
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography
            aria-label="Beer Math"
            type="title"
            color="inherit"
            className={classes.flex}>

            <span aria-label="beer" role="img">🍺</span>
            + <span aria-label="beer" role="img">🍺</span>
            = <span aria-label="cheers" role="img">🍻</span>
          </Typography>
          <Button color="contrast">Home</Button>
          <Button color="contrast">About</Button>
          <Button color="contrast">Contact</Button>
        </Toolbar>
      </AppBar>

      <div className="page-content">
        <RecipeTargetsContainer />
        <GrainContainer />
      </div>
    </div>
  );
}

App.propTypes = {
  classes: object.isRequired,
};

export default withStyles(styleSheet)(App);
