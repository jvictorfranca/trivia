import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Header from '../../Components/Header';
import Game from '../../Components/Game';
import ScoreBoard from '../../Components/ScoreBoard';
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
    return (
      <main>
        <Header score="0" playerName="joao" email="jvictorfranca@yahoo.com.br" />
        <Game />
        <ScoreBoard />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTrivia: (payload) => (dispatch(addTrivia(payload))),
});

Trivia.propTypes = {
  setTrivia: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Trivia);
