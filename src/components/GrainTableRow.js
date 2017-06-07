import React, { PropTypes, Component } from 'react';
import EditableGrainField from './EditableGrainField';
import GrainActionsColumn from './GrainActionsColumn';

export default class GrainTableRow extends Component {
  
  constructor(props) {
    super(props);
    
    this.onChangeGrainType = this.onChangeGrainType.bind(this);
    this.onChangeMaxPpg = this.onChangeMaxPpg.bind(this);
    this.onChangeProportion = this.onChangeProportion.bind(this);
    this.onClickUpdate = this.onClickUpdate.bind(this);
    
    this.state = {
      grainType: '',
      maxPpg: '',
      proportion: '',
    };
  }
  
  onChangeGrainType(event) {
    const grainType = event.target.value;
	
	this.setState({
      grainType,
	});
  }
  
  onChangeMaxPpg(event) {
    const maxPpg = event.target.value;
	
	this.setState({
      maxPpg,
	});
  }
  
  onChangeProportion(event) {
    const proportion = event.target.value;
	
	this.setState({
      proportion,
	});
  }
  
  onClickUpdate () {
    /*todo*/
  }
  
  render () {
    
    const { grain, grainId, onClickEdit, onClickDelete, onClickUpdate } = this.props
    
    return (
      <tr className={grain.isEditing ? 'is-editing' : ''}>
        <td className="mdl-data-table__cell--non-numeric">
          <EditableGrainField
            isEditing={grain.isEditing}
            name="grainType"
            label="Grain Type"
            value={grain.grainType}
            onChange={this.onChangeGrainType} />
        </td>

        <td className="mdl-data-table__cell--non-numeric">
          <EditableGrainField
            isEditing={grain.isEditing}
            name="grainMaxPpg"
            label="Max PPG"
            value={grain.maxPpg}
            onChange={this.onChangeMaxPpg} />
        </td>

        <td className="mdl-data-table__cell--non-numeric">
          <EditableGrainField
            isEditing={grain.isEditing}
            name="grainProportion"
            label="Proportion (%)"
            value={grain.proportion}
            onChange={this.onChangeProportion} />
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
}

GrainTableRow.propTypes = {
  grain: PropTypes.object.isRequired,
  grainId: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickUpdate: PropTypes.func.isRequired,
};
