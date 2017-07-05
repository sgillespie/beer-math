import { bool, node, string } from 'prop-types';
import React from 'react';
import Input from 'material-ui/Input';

export default function EditableGrainField(props) {
  const { isEditing, value, ...rest } = props;

  if (isEditing) {
    return (
      <Input
        defaultValue={value}
        {...rest} />
    );
  }

  return (
    <span>{value}</span>
  );
}

EditableGrainField.propTypes = {
  isEditing: bool,
  value: node.isRequired,
  label: string.isRequired,
};

EditableGrainField.defaultProps = {
  isEditing: false,
};
