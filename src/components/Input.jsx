import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Input extends Component {
  render() {
    const { label, name, type, test, placeholder } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <input
          type={ type }
          name={ name }
          id={ name }
          data-testid={ test }
          placeholder={ placeholder }
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
};

export default Input;
