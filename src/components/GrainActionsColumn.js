import { bool, func, shape, string } from 'prop-types';
import IconButton from 'react-mdl/lib/IconButton';
import React from 'react';
import Tooltip from 'react-mdl/lib/Tooltip';

export default function GrainActionsColumn(props) {
  const { grain, id, onClickDelete, onClickEdit, onClickUpdate } = props;

  function deleteRow() {
    onClickDelete(id);
  }

  return (
    <div className="icon-group">
      { !grain.isEditing &&
        <div>
          <Tooltip label="Delete">
            <IconButton
              name="delete"
              onClick={deleteRow}
              ripple />
          </Tooltip>

          <Tooltip label="Edit">
            <IconButton
              name="create"
              onClick={onClickEdit}
              ripple />
          </Tooltip>
        </div>
      }

      { grain.isEditing &&
        <div>
          <Tooltip label="Cancel">
            <IconButton
              name="clear"
              onClick={onClickEdit}
              ripple />
          </Tooltip>

          <Tooltip label="Save">
            <IconButton
              name="check"
              onClick={onClickUpdate}
              ripple />
          </Tooltip>
        </div>
      }
    </div>
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

