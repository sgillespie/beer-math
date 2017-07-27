import { bool, func, object, shape, string } from 'prop-types';
import CheckIcon from 'material-ui-icons/Check';
import ClearIcon from 'material-ui-icons/Clear';
import CreateIcon from 'material-ui-icons/Create';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import DeleteIcon from 'material-ui-icons/Delete';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import React from 'react';

export const styleSheet = createStyleSheet('GrainTableRow', {
  button: {
    '&:hover': {
      color: 'rgb(83,109,254)',
    }
  },
});

function GrainActionsColumn(props) {
  const {
    classes,
    grain,
    id,
    onClickDelete,
    onClickEdit,
    onClickUpdate
  } = props;

  function deleteRow() {
    onClickDelete(id);
  }

  return (
    <Grid justify="flex-end" container>
      { !grain.isEditing &&
        <Grid item>
          <IconButton
            aria-label="delete"
            className={classes.button}
            name="delete"
            onClick={deleteRow}>

            <DeleteIcon />
          </IconButton>

          <IconButton
            aria-label="edit"
            className={classes.button}
            name="edit"
            onClick={onClickEdit}>

            <CreateIcon />
          </IconButton>
        </Grid>
      }

      { grain.isEditing &&
        <Grid item>
          <IconButton
            aria-label="cancel"
            className={classes.button}
            name="cancel"
            onClick={onClickEdit}>

            <ClearIcon />
          </IconButton>

          <IconButton
            aria-label="save"
            className={classes.button}
            name="save"
            onClick={onClickUpdate}>

            <CheckIcon />
          </IconButton>
        </Grid>
      }
    </Grid>
  );
}

GrainActionsColumn.propTypes = {
  classes: object.isRequired,
  grain: shape({
    isEditing: bool,
  }).isRequired,
  id: string.isRequired,
  onClickDelete: func.isRequired,
  onClickEdit: func.isRequired,
  onClickUpdate: func.isRequired,
};

export default withStyles(styleSheet)(GrainActionsColumn);
