import React from 'react';
import propTypes from 'prop-types';

class ButtonNext extends React.Component {
  constructor() {
    super();
    this.buttonDisabledOrTime = this.buttonDisabledOrTime.bind(this);
  }

  buttonDisabledOrTime() {
    const { time, buttonDisabled } = this.props;

    if (buttonDisabled === false || time === 0) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        {
          this.buttonDisabledOrTime() ? <p> </p>
            : <button type="button" data-testid="btn-next"> Próxima </button>
        }
      </div>
    );
  }
}

ButtonNext.propTypes = {
  time: propTypes.number.isRequired,
  buttonDisabled: propTypes.bool.isRequired,
};

export default ButtonNext;
