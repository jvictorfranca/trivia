import React, { Component } from 'react';
import { connect } from 'react-redux';
// import apiReducer from '../../redux/reducers/apiReducer';

class Game extends Component {
  render() {
    const { trivia } = this.props;
    const { results } = trivia;
    let currentQuestion;
    let allAnswers;
    if (results) {
      currentQuestion = results[trivia.current];
      const correctAnswer = {
        correct: true,
        number: Math.random(),
        answer: currentQuestion.correct_answer,
      };
      console.log(currentQuestion);
      const wrongAnswers = currentQuestion.incorrect_answers.map((answer, index) => ({
        correct: false,
        number: Math.random(),
        answer,
        index,

      }));
      allAnswers = [correctAnswer, ...wrongAnswers];
      allAnswers.sort((a, b) => a.number - b.number);
      console.log(allAnswers);
    }

    return (
      <section>
        {currentQuestion
          ? <p data-testid="question-category">{currentQuestion.category}</p>
          : <p>Loading...</p>}
        {currentQuestion
          ? <p data-testid="question-text">{currentQuestion.question}</p>
          : <p>Loading...</p>}
        {allAnswers
          ? allAnswers.map((answer) => (
            <button
              type="button"
              key={ answer.number }
              data-testid={ answer.correct
                ? 'correct-answer' : `wrong-answer-${answer.index}` }
            >
              {answer.answer}
            </button>
          )) : <p>Loading</p>}

      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  trivia: state.apiReducer.trivias,
});

export default connect(mapStateToProps)(Game);
