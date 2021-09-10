import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderFeedback from '../../Components/HeaderFeedback';

class Feedback extends Component {
  phraseConstructor(number) {
    let message;
    const minNumber = 3;
    if (number < minNumber) message = 'Podia ser melhor...';
    else if (number >= minNumber) message = 'Mandou bem!';

    return message;
  }

  render() {
    const { correctQuestionCounter, totalScore, history } = this.props;
    return (
      <main>

        <HeaderFeedback />
        <p
          data-testid="feedback-text"
        >
          {this.phraseConstructor(correctQuestionCounter)}
        </p>
        <p data-testid="feedback-total-score">{totalScore}</p>
        <p data-testid="feedback-total-question">
          {correctQuestionCounter}
        </p>

        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ () => history.push('/') }
        >
          Jogar novamente
        </button>

      </main>

    );
  }
}

const mapStateToProps = (state) => ({
  correctQuestionCounter: state.apiReducer.userData.correctQuestionCounter,
  totalScore: state.apiReducer.userData.score,
});

Feedback.propTypes = {
  correctQuestionCounter: propTypes.number.isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
  totalScore: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
