import IconButton from 'react-mdl/lib/IconButton';
import React, { PropTypes } from 'react';
import Tooltip from 'react-mdl/lib/Tooltip';

export default function GrainActionsColumn({ grain, id, onClickDelete, onClickEdit, onClickUpdate }) {
  function deleteRow() {
    onClickDelete(id);
  }
  
  function editRow() {
    onClickEdit(id);
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
              onClick={editRow}     
              ripple />
          </Tooltip>
	</div>
      }
	  
      { grain.isEditing &&
        <div>
          <Tooltip label="Cancel">
            <IconButton 
              name="clear"
              onClick={editRow}
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
  grain: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickUpdate: PropTypes.func.isRequired,
};


