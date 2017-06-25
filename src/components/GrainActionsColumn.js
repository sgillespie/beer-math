import { func, object, string } from 'prop-types'
import IconButton from 'react-mdl/lib/IconButton';
import React from 'react';
import Tooltip from 'react-mdl/lib/Tooltip';

export default function GrainActionsColumn({ grain, id, onClickDelete, onClickEdit, onClickUpdate }) {
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
  grain: object.isRequired,
  id: string.isRequired,
  onClickDelete: func.isRequired,
  onClickEdit: func.isRequired,
  onClickUpdate: func.isRequired,
};


