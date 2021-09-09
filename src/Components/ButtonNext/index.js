import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCurrent } from '../../redux/actions';

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

  buttonClick() {
    const { increaseCurrent, rst } = this.props;
    increaseCurrent();
    rst();
  }

  render() {
    return (
      <div>
        {
          this.buttonDisabledOrTime() ? <p> </p>
            : (
              <button
                type="button"
                data-testid="btn-next"
                onClick={ () => this.buttonClick() }
              >
                Próxima
              </button>)
        }
      </div>
    );
  }
}

ButtonNext.propTypes = {
  time: propTypes.number.isRequired,
  buttonDisabled: propTypes.bool.isRequired,
  increaseCurrent: propTypes.func.isRequired,
  rst: propTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  increaseCurrent: () => dispatch(addCurrent()),
});

export default connect(null, mapDispatchToProps)(ButtonNext);
