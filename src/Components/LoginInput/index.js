import React from 'react';
import propTypes from 'prop-types';

class LoginInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="login" className="label-login">
        Login:
        <input
          className="input-login"
          type="text"
          name="login"
          id="login"
          data-testid="input-player-name"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

LoginInput.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default LoginInput;
