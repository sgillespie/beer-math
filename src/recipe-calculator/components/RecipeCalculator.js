import React from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import FontAwesome from '@fortawesome/react-fontawesome';
import Icon from 'material-ui/Icon';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import faBeer from '@fortawesome/fontawesome-free-solid/faBeer';
import { object } from 'prop-types';
import { withStyles } from 'material-ui/styles';

import GrainContainer from '../../recipe-grains/containers/GrainContainer';
import RecipeTargetsContainer from '../../recipe-targets/containers/RecipeTargetsContainer';

const styleSheet = theme => ({
  flex: {
    flex: 1,
  },

  icon: {
    marginRight: theme.spacing.unit * 1,
  },
});

function RecipeCalculator({ classes }) {
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Icon className={classes.icon}>
            <FontAwesome icon={faBeer} />
          </Icon>

          <Typography
            aria-label="Beer Math"
            type="title"
            color="inherit"
            className={classes.flex}>

            Beer Math
          </Typography>

          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      <div className="page-content">
        <RecipeTargetsContainer />
        <GrainContainer />
      </div>
    </div>
  );
}

RecipeCalculator.propTypes = {
  classes: object.isRequired,
};

export default withStyles(styleSheet)(RecipeCalculator);
