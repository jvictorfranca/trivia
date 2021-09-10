import React from 'react';
import propTypes from 'prop-types';

class Ranking extends React.Component {
  render() {
    const playerRank = JSON.parse(localStorage.ranking);
    const { history } = this.props;
    return (
      <main>
        <h1 data-testid="ranking-title">Ranking</h1>
        {playerRank.map(((player, index) => (
          <section key={ index }>
            <img src={ player.img } alt="gravatar" />
            <p data-testid={ `player-name-${index}` }>{player.name}</p>
            <p data-testid={ `player-score-${index}` }>{player.score}</p>
          </section>)))}
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ () => history.push('/') }
        >
          Inicio
        </button>
      </main>
    );
  }
}

Ranking.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Ranking;
