import IconButton from 'react-mdl/lib/IconButton';
import React, { PropTypes } from 'react';

export default function GrainActionsColumn({ id, onClickDelete }) {
  function deleteRow() {
    onClickDelete(id);
  }

  return (
    <div className="icon-group">
      <IconButton 
        name="delete" 
        onClick={deleteRow}
        ripple />

      <IconButton 
        name="create" 
        ripple />
    </div>
  );
}

GrainActionsColumn.propTypes = {
  id: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};


