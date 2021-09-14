import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderFeedback from '../../Components/HeaderFeedback';
import './styles.css';
import nino from '../../Images/nino.webp';

class Feedback extends Component {
  phraseConstructor(number) {
    let message;
    const minNumber = 3;
    if (number < minNumber) message = 'Plift ploft still, a porta não se abriu...';
    else if (number >= minNumber) message = 'Plift ploft still, a porta se abriu!';

    return message;
  }

  render() {
    const { correctQuestionCounter, totalScore, history } = this.props;
    return (
      <main className="feedback-main">
        <HeaderFeedback />
        <section className="feedback-image-container">
          <div className="feedback-text-container">
            <p data-testid="feedback-text">
              {this.phraseConstructor(correctQuestionCounter)}
            </p>
            <p data-testid="feedback-total-score">
              Pontuação:
              {totalScore}
            </p>
            <p data-testid="feedback-total-question">
              Respostas Corretas:
              {correctQuestionCounter}
            </p>
          </div>
          <img src={ nino } alt="nino" />
        </section>

        <div className="feedback-button-container">
          <button
            type="button"
            data-testid="btn-play-again"
            onClick={ () => history.push('/trivia') }
            className="button-playagain"
          >
            Jogar novamente
          </button>
          <button
            type="button"
            data-testid="btn-ranking"
            onClick={ () => history.push('/ranking') }
            className="button-ranking"
          >
            Ver Ranking
          </button>

        </div>

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
