import IconButton from 'react-mdl/lib/IconButton';
import React, { PropTypes } from 'react';

export default function GrainActionsColumn({ id, onClickDelete, onClickEdit }) {
  function deleteRow() {
    onClickDelete(id);
  }
  
  function editRow() {
    onClickEdit(id);
  }

  return (
    <div className="icon-group">
      <IconButton 
        name="delete" 
        onClick={deleteRow}
        ripple />

      <IconButton 
        name="create"
        onClick={editRow}		
        ripple />
    </div>
  );
}

GrainActionsColumn.propTypes = {
  id: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
};


