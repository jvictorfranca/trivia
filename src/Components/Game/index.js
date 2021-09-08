import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './styles.css';
import { addScore } from '../../redux/actions';
import scoreCalculator from '../../helpers/scoreCalculator';
// import apiReducer from '../../redux/reducers/apiReducer';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      sortedAnswers: undefined,
      time: 30,
      constInterval: undefined,
      counting: false,
    };
    this.setAnswer = this.setAnswer.bind(this);
    this.stateSortedAnswers = this.stateSortedAnswers.bind(this);
    this.startTimming = this.startTimming.bind(this);
    this.stopTimming = this.stopTimming.bind(this);
    this.makeInterval = this.makeInterval.bind(this);
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
    }, () => {
      const { time } = this.state;
      const { trivia, addPoints } = this.props;
      const { results } = trivia;
      const currentQuestion = results[trivia.current];
      if (correct) {
        const score = scoreCalculator(time, currentQuestion.difficulty);
        addPoints(score);
      }
      this.stopTimming();
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

  stateSortedAnswers(array) {
    this.setState({
      sortedAnswers: array,
    });
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

  render() {
    const { trivia } = this.props;
    const { results } = trivia;
    let currentQuestion; let allAnswers;
    const { answered, sortedAnswers, time } = this.state;
    if (results) {
      currentQuestion = results[trivia.current];
      const correctAnswer = {
        correct: true, number: Math.random(), answer: currentQuestion.correct_answer,
      };
      const wrongAnswers = currentQuestion.incorrect_answers.map((answer, index) => ({
        correct: false, number: Math.random(), answer, index,
      }));
      allAnswers = [correctAnswer, ...wrongAnswers];
      if (!sortedAnswers) {
        allAnswers.sort((a, b) => a.number - b.number);
        console.log(currentQuestion);
        this.stateSortedAnswers(allAnswers);
      }
    }
    return (
      <section>
        <p>{time}</p>
        {currentQuestion
          ? <p data-testid="question-category">{currentQuestion.category}</p>
          : <p>Loading...</p>}
        {currentQuestion
          ? <p data-testid="question-text">{currentQuestion.question}</p>
          : <p>Loading...</p>}
        {sortedAnswers
          ? sortedAnswers.map((answer) => (
            <button
              type="button"
              disabled={ answered }
              key={ answer.number }
              data-testid={ answer.correct
                ? 'correct-answer' : `wrong-answer-${answer.index}` }
              className={ answered && (answer.correct ? 'correct' : 'wrong') }
              onClick={ () => this.setAnswer(answer.correct) }
            >
              {answer.answer}
            </button>
          )) : <p>Loading</p>}

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
};

const mapStateToProps = (state) => ({
  trivia: state.apiReducer.trivias,
});

const mapDispatchToProps = (dispatch) => ({
  addPoints: (points) => dispatch(addScore(points)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
