import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ScoreBoard extends React.Component {
  render() {
    const { name, score } = this.props;
    return (
      <div>
        <h3>Placar</h3>
        <p>{ `Nome: ${name}` }</p>
        <p>
          { `Pontos: ${score}` }
        </p>
      </div>
    );
  }
}

ScoreBoard.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.apiReducer.userData.name,
  score: state.apiReducer.userData.score,
});

export default connect(mapStateToProps, null)(ScoreBoard);
