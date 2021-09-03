import React, { Component } from 'react';
import { connect } from 'react-redux';
// import apiReducer from '../../redux/reducers/apiReducer';

class Game extends Component {
  render() {
    const { trivia } = this.props;
    const { results } = trivia;
    const currentQuestion = results[trivia.current];
    const correctAnswer = {
      correct: true,
      number: Math.random(),
      answer: currentQuestion.correct_answer,
    };
    const wrongAnswers = currentQuestion.incorrectAnswers.map(answer => ({
      correct:false,
      number: Math.random(),
      answer: answer,

    }));
    const allAnswers = [correctAnswer, ...wrongAnswers];
    console.log(allAnswers);
    return (
      <section>
        <p data-testid="question-category">{currentQuestion.category}</p>
        <p data-testid="question-text">{currentQuestion.question}</p>

      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  trivia: state.apiReducer.trivia,
});

export default connect(mapStateToProps)(Game);
