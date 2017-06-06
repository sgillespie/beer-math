import { shallow } from 'enzyme';
import chai from 'chai';
import React from 'react';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';

import EditableGrainField from './EditableGrainField';
import GrainTableRow from './GrainTableRow';
import GrainActionsColumn from './GrainActionsColumn';

chai.use(sinonChai);
const should = chai.should();

let grain,
    grainTableRow,
    onClickDelete,
    onClickEdit,
    onClickUpdate;
	
function render(){
  return shallow(
    <GrainTableRow
      grain={grain}
      grainId="0"
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      onClickUpdate={onClickUpdate} />
  );
}    
    
beforeEach(() => {
  grain = {
    grainType: 'type',
    maxPpg: '0',
    proportion: '1',
    weight: '2',
  };
  onClickDelete = spy();
  onClickEdit = spy();
  onClickUpdate = spy();
});

it('renders', () => {
  const grainTableRow = render();
  
  should.exist(grainTableRow);
  grainTableRow.should.have.lengthOf(1);
});

it('passes onClickDelete to Grain Actions Column', () => {
  render()
    .find(GrainActionsColumn)
    .prop('onClickDelete')();

  onClickDelete.should.have.been.calledWith();
});

it('passes onClickEdit to Grain Actions Column', () => {
  render()
    .find(GrainActionsColumn)
    .prop('onClickEdit')();

  onClickEdit.should.have.been.calledWith();
});

it('passes onClickUpdate to Grain Actions Column', () => {
  render()
    .find(GrainActionsColumn)
    .prop('onClickUpdate')();

  onClickUpdate.should.have.been.calledWith();
});

it('renders EditableGrainFields for each grain', () => {
  render()
    .find(EditableGrainField)
    .should.have.length.above(0);
});

it('passes NOT grain.isEditing to EditableGrainField', () => {
  render()
    .find(EditableGrainField)
    .forEach(field => (!!field.props().isEditing).should.not.be.ok);
});

it('passes grain.isEditing to EditableGrainField', () => {
  grain.isEditing = true;
  
  render()
    .find(EditableGrainField)
    .forEach(field => (!!field.props().isEditing).should.be.ok);  
});

it('table row does not have className is-editing when NOT grain.isEditing', () => {
  render()
	.find('.is-editing')
	.should.have.lengthOf(0);
});

it('adds className is-editing to the table row when grain.isEditing', () => {
  grain.isEditing = true;
  
  render()
	.find('.is-editing')
	.should.have.lengthOf(1); 
});

it('passes grain to Grain Actions Column', () => {
    render()
      .find(GrainActionsColumn)
      .prop('grain')
      .should.deep.equal(grain);
});