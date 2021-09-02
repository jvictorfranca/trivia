import React from 'react';
import propTypes from 'prop-types';

class EmailInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="email"
          id="email"
          data-testid="input-gravatar-email"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

EmailInput.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default EmailInput;
