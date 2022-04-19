import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Form.css';

class Input extends Component {
  render() {
    const { label, name, type, test,
      placeholder, value, onChange, min, max } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <input
          min={ min }
          max={ max }
          type={ type }
          name={ name }
          id={ name }
          data-testid={ test }
          placeholder={ placeholder }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default Input;
