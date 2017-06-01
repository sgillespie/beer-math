import React, { PropTypes } from 'react';
import EditableGrainField from './EditableGrainField';
import GrainActionsColumn from './GrainActionsColumn';
import { map } from 'lodash';

export default function GrainTable({ grain, grainId, onClickDelete, onClickEdit, onClickUpdate }) {
  return (
    <tr className={grain.isEditing ? 'is-editing' : ''}>
      <td className="mdl-data-table__cell--non-numeric">
        <EditableGrainField
          isEditing={grain.isEditing}
          name="grainType"
          label="Grain Type"
          value={grain.grainType} />
      </td>

      <td className="mdl-data-table__cell--non-numeric">
        <EditableGrainField
          isEditing={grain.isEditing}
          name="grainMaxPpg"
          label="Max PPG"
          value={grain.maxPpg} />
      </td>

      <td className="mdl-data-table__cell--non-numeric">
        <EditableGrainField
          isEditing={grain.isEditing}
          name="grainProportion"
          label="Proportion (%)"
          value={grain.proportion} />
      </td>
      
      <td className="mdl-data-table__cell--non-numeric">X lbs Y oz</td>
      
      <td className="mdl-data-table__cell--non-numeric">
        <GrainActionsColumn
          id={grainId}
          onClickDelete={onClickDelete}
          onClickEdit={onClickEdit}
          onClickUpdate={onClickUpdate}
          grain={grain} />
      </td>
    </tr>
  );
}

GrainTable.propTypes = {
  grain: PropTypes.object.isRequired,
  grainId: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickUpdate: PropTypes.func.isRequired,
};
