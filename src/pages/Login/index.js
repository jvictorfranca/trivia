import React from 'react';
import PropTypes from 'prop-types';
import EmailInput from '../../Components/EmailInput';
import LoginInput from '../../Components/LoginInput';
import logo from '../../trivia.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      login: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkFields = this.checkFields.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  checkFields() {
    const { email, login } = this.state;
    return !(login.length !== 0 && email.length !== 0);
  }

  async handleClick() {
    const { history } = this.props;
    const token = await this.fetchToken();
    console.log(token);
    history.push('/trivia');
  }

  async fetchToken() {
    const urlToken = await fetch('https://opentdb.com/api_token.php?command=request');
    const { token } = await urlToken.json();
    localStorage.setItem('token', token);
    return token;
  }

  render() {
    const { login, email } = this.state;
    console.log(this.checkFields());
    return (
      <main>

        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            SUA VEZ. Teste para começar
          </p>
        </header>

        <form action="GET">
          <LoginInput onChange={ this.handleChange } value={ login } />

          <EmailInput onChange={ this.handleChange } value={ email } />

          <button
            type="button"
            data-testid="btn-play"
            disabled={ this.checkFields() }
            onClick={ () => this.handleClick() }
          >
            Jogar

          </button>
        </form>

      </main>

    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
