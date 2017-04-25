import React, { PropTypes } from 'react';
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
  isEditing: PropTypes.bool,
  value: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

EditableGrainField.defaultProps = {
  isEditing: false,
};
