import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Redirect } from 'react-router';
import Header from '../../Components/Header';
import Game from '../../Components/Game';
import addTrivia from '../../redux/actions';

class Trivia extends React.Component {
  componentDidMount() {
    this.getTrivia();
  }

  async getTrivia() {
    const token = localStorage.getItem('token');
    const { setTrivia } = this.props;
    const questions = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const requestions = await questions.json();
    setTrivia(requestions);
  }

  render() {
    const { trivia } = this.props;
    const { current } = trivia;
    const maxQuestions = 5;
    return (
      <main>
        <Header />
        <Game />
        {current === maxQuestions && <Redirect to="/feedback" />}
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTrivia: (payload) => (dispatch(addTrivia(payload))),
});

const mapStateToProps = (state) => ({
  trivia: state.apiReducer.trivias,
});

Trivia.propTypes = {
  setTrivia: propTypes.func.isRequired,
  trivia: propTypes.shape({
    current: propTypes.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Trivia);
