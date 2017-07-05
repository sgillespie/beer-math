import { bool, func, shape, string } from 'prop-types';
import CheckIcon from 'material-ui-icons/Check';
import ClearIcon from 'material-ui-icons/Clear';
import CreateIcon from 'material-ui-icons/Create';
import DeleteIcon from 'material-ui-icons/Delete';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import React from 'react';

function GrainActionsColumn(props) {
  const { grain, id, onClickDelete, onClickEdit, onClickUpdate } = props;

  function deleteRow() {
    onClickDelete(id);
  }

  return (
    <Grid justify="flex-end" container>
      { !grain.isEditing &&
        <Grid item>
          <IconButton aria-label="delete" name="delete" onClick={deleteRow}>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="edit" name="edit" onClick={onClickEdit}>
            <CreateIcon />
          </IconButton>
        </Grid>
      }

      { grain.isEditing &&
        <Grid item>
          <IconButton aria-label="cancel" name="cancel" onClick={onClickEdit}>
            <ClearIcon />
          </IconButton>

          <IconButton aria-label="save" name="save" onClick={onClickUpdate}>
            <CheckIcon />
          </IconButton>
        </Grid>
      }
    </Grid>
  );
}

GrainActionsColumn.propTypes = {
  grain: shape({
    isEditing: bool,
  }).isRequired,
  id: string.isRequired,
  onClickDelete: func.isRequired,
  onClickEdit: func.isRequired,
  onClickUpdate: func.isRequired,
};

export default GrainActionsColumn;
