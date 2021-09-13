import React from 'react';
import propTypes from 'prop-types';
import './styles.css';
import rato from '../../Images/rato.gif';

class Ranking extends React.Component {
  render() {
    const playerRank = JSON.parse(localStorage.ranking);
    const { history } = this.props;
    return (
      <main>
        <header className="ranking-header">
          <h1 data-testid="ranking-title">Ranking</h1>
          <img src={ rato } alt="Rato tomando banho" className="rato-img" />
        </header>

        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ () => history.push('/') }
          className="btn-go-home"
        >
          Inicio
        </button>

        {playerRank.map(((player, index) => (
          <section key={ index } className="player-section">
            <img src={ player.img } alt="gravatar" />
            <p data-testid={ `player-name-${index}` }>
              {player.name
                ? player.name : 'Anónimo'}
              :

            </p>
            <p data-testid={ `player-score-${index}` }>
              {player.score}
              {' '}
              pontos
            </p>
          </section>)))}

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
