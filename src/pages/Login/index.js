import React from 'react';
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
          >
            Jogar

          </button>
        </form>

      </main>

    );
  }
}

export default Login;
