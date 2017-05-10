import IconButton from 'react-mdl/lib/IconButton';
import React, { PropTypes } from 'react';
import Tooltip from 'react-mdl/lib/Tooltip';

export default function GrainActionsColumn({ id, onClickDelete, onClickEdit }) {
  function deleteRow() {
    onClickDelete(id);
  }
  
  function editRow() {
    onClickEdit(id);
  }

  return (
    <div className="icon-group">
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
      
      <Tooltip label="Cancel">
        <IconButton 
          name="clear"
          ripple />
      </Tooltip>
    
      <Tooltip label="Save">
        <IconButton 
          name="check"      
          ripple />
      </Tooltip>
    </div>
  );
}

GrainActionsColumn.propTypes = {
  id: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
};


