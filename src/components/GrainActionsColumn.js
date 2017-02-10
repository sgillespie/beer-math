import IconButton from 'react-mdl/lib/IconButton';
import React from 'react';

export default function GrainActionsColumn() {
  return (
    <div className="icon-group">
      <IconButton name="delete" ripple />
      <IconButton name="create" ripple />
    </div>
  );
}

