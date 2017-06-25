import { bool, node, string } from 'prop-types';
import React from 'react';
import Textfield from 'react-mdl/lib/Textfield';

export default function EditableGrainField(props) {
  const { isEditing, value, ...rest } = props;

  if (isEditing) {
      return (
          <Textfield defaultValue={value} {...rest} />
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
