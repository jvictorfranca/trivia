import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './styles.css';
import MD5 from 'crypto-js/md5';
import { addScore, addCorrectQuestionCounter } from '../../redux/actions';
import scoreCalculator from '../../helpers/scoreCalculator';
import ButtonNext from '../ButtonNext';
// import apiReducer from '../../redux/reducers/apiReducer';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      buttonDisabled: true,
      time: 30,
      constInterval: undefined,
      counting: false,
    };
    this.setAnswer = this.setAnswer.bind(this);
    this.startTimming = this.startTimming.bind(this);
    this.stopTimming = this.stopTimming.bind(this);
    this.makeInterval = this.makeInterval.bind(this);
    this.saveOnLocalStorage = this.saveOnLocalStorage.bind(this);
    this.reset = this.reset.bind(this);
    this.saveRankOnLocalStorage = this.saveRankOnLocalStorage.bind(this);
  }

  componentDidMount() {
    this.saveOnLocalStorage();
  }

  componentDidUpdate() {
    const { time, answered } = this.state;
    if (!answered) {
      this.startTimming();
    }

    if (time === 0 && !answered) {
      this.setAnswer(false);
    }
  }

  setAnswer(correct) {
    this.setState({
      answered: true,
      buttonDisabled: false,
    }, () => {
      const { time } = this.state;
      const { trivia, addPoints, addCorrectQuestion } = this.props;
      const { results } = trivia;
      const currentQuestion = results[trivia.current];
      if (correct) {
        const score = scoreCalculator(time, currentQuestion.difficulty);
        addPoints(score);
        addCorrectQuestion();
        this.saveOnLocalStorage(score);
      }
      this.stopTimming();
    });
  }

  saveRankOnLocalStorage() {
    const { nameUser, scoreUser, trivia } = this.props;
    const { current } = trivia;
    const imgUrl = this.fetchImgSrc();
    const player = {
      name: nameUser,
      score: scoreUser,
      img: imgUrl,
    };
    const ALL_QUESTIONS = 4;
    if (current === ALL_QUESTIONS) {
      const oldRanking = localStorage.ranking ? JSON.parse(localStorage.ranking) : [];
      let newRanking = [...oldRanking, player];
      newRanking.sort((a, b) => b.score - a.score);
      newRanking = newRanking.map((currPlayer, index) => ({
        ...currPlayer,
        index,
      }));
      const rankingString = JSON.stringify(newRanking);
      localStorage.ranking = rankingString;
    }
  }

  fetchImgSrc() {
    const { emailUser } = this.props;
    const hashed = MD5(emailUser).toString();

    const imgURL = `https://www.gravatar.com/avatar/${hashed}`;
    return imgURL;
  }

  reset() {
    this.setState({
      answered: false,
      buttonDisabled: true,
      time: 30,
      constInterval: undefined,
      counting: false,
    });
  }

  makeInterval() {
    const ONE_SECOND = 1000;
    const setConstInterval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time - 1,
        constInterval: setConstInterval,
      }));
    }, ONE_SECOND);
  }

  startTimming() {
    const { counting } = this.state;
    if (!counting) {
      this.setState(({
        counting: true,
      }), this.makeInterval());
    }
  }

  stopTimming() {
    const { constInterval } = this.state;
    if (constInterval) {
      clearInterval(constInterval);
      this.setState({
        constInterval: undefined,
      });
    }
  }

  saveOnLocalStorage(points) {
    const { nameUser, scoreUser, emailUser, assertionsUser } = this.props;
    const state = {
      player: {
        name: nameUser,
        assertions: assertionsUser === 0 ? 0 : assertionsUser + 1,
        score: points === undefined ? 0 : scoreUser + points,
        gravatarEmail: emailUser,
      },
    };
    localStorage.setItem('state', JSON.stringify(state));
  }

  compareFunction(a, b) {
    const ONE = 1;
    const MINUSONE = -1;
    return (a.answer > b.answer) ? ONE : MINUSONE;
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { trivia } = this.props;
    const { results } = trivia;
    let currentQuestion; let allAnswers;
    const { answered, time, buttonDisabled } = this.state;
    const c = 'question-category';
    if (results) {
      currentQuestion = results[trivia.current];
      const correctAnswer = { correct: true, answer: currentQuestion.correct_answer,
      };
      const wrongAnswers = currentQuestion.incorrect_answers.map((answer, index) => ({
        correct: false, answer, index,
      }));
      allAnswers = [correctAnswer, ...wrongAnswers];
      allAnswers.sort((a, b) => this.compareFunction(a, b));
    }
    return (
      <section className="game-section">
        <p className="timer">{`Time: ${time}`}</p>
        {currentQuestion
          ? (
            <p data-testid={ c } className={ c }>
              {`Category: ${currentQuestion.category}`}
            </p>
          )
          : <p>Loading...</p>}
        <div className="question-image" />
        {currentQuestion ? <p
          data-testid="question-text"
          className="text"
          dangerouslySetInnerHTML={ { __html: currentQuestion.question } }
        />
          : <p>Loading...</p>}
        { allAnswers
          ? allAnswers.map((answer, index) => (
            <button
              type="button"
              disabled={ answered }
              key={ index }
              data-testid={ answer.correct
                ? 'correct-answer' : `wrong-answer-${answer.index}` }
              className={ (answered
                 && (answer.correct ? 'correct answer' : 'wrong answer')) || 'answer' }
              onClick={ () => this.setAnswer(answer.correct) }
            >
              {answer.answer}
            </button>
          )) : <p>Loading</p>}
        <ButtonNext
          buttonDisabled={ buttonDisabled }
          time={ time }
          rst={ this.reset }
          saveRankOnLocalStorage={ this.saveRankOnLocalStorage }
        />
      </section>
    );
  }
}

Game.propTypes = {
  trivia: propTypes.shape({
    current: propTypes.number.isRequired,
    results: propTypes.arrayOf(propTypes.object.isRequired),
  }).isRequired,
  addPoints: propTypes.func.isRequired,
  nameUser: propTypes.string.isRequired,
  scoreUser: propTypes.number.isRequired,
  emailUser: propTypes.string.isRequired,
  addCorrectQuestion: propTypes.func.isRequired,
  assertionsUser: propTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  trivia: state.apiReducer.trivias,
  nameUser: state.apiReducer.userData.name,
  scoreUser: state.apiReducer.userData.score,
  emailUser: state.apiReducer.userData.email,
  assertionsUser: state.apiReducer.userData.correctQuestionCounter,
});

const mapDispatchToProps = (dispatch) => ({
  addPoints: (points) => dispatch(addScore(points)),
  addCorrectQuestion: () => dispatch(addCorrectQuestionCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
