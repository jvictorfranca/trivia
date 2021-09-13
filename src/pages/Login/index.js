import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EmailInput from '../../Components/EmailInput';
import LoginInput from '../../Components/LoginInput';
import logo from '../../trivia.png';
import castelo from '../../Images/castelo.gif';
import { addUserData, resetCurrent } from '../../redux/actions';
import './styles.css';

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

  componentDidMount() {
    const { removeCurrent } = this.props;
    removeCurrent();
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
    const { history, functionAddUserData } = this.props;
    const { email, login } = this.state;
    const payload = {
      name: login,
      email,
    };
    functionAddUserData(payload);
    const token = await this.fetchToken();
    // localStorage.state = {
    //   ...localStorage.state,
    //   player: {
    //     name: login,
    //     gravatarEmail: email,
    //   },
    // };
    localStorage.setItem('token', token);

    history.push('/trivia');
  }

  async fetchToken() {
    const urlToken = await fetch('https://opentdb.com/api_token.php?command=request');
    const { token } = await urlToken.json();
    return token;
  }

  render() {
    const { login, email } = this.state;
    const { history } = this.props;
    return (
      <main>

        <form action="GET" className="form-login">
          <LoginInput onChange={ this.handleChange } value={ login } />

          <EmailInput onChange={ this.handleChange } value={ email } />

          <button
            className="button-login"
            type="button"
            data-testid="btn-play"
            disabled={ this.checkFields() }
            onClick={ () => this.handleClick() }
          >
            Jogar

          </button>

          <button
            className="button-config"
            type="button"
            data-testid="btn-settings"
            onClick={ () => history.push('/configuracoes') }
          >
            Configurações
          </button>
        </form>
        <section className="login-image-container">
          <img src={ logo } className="App-logo" alt="logo" />

          <img src={ castelo } alt="Castelo" />

        </section>

      </main>

    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  functionAddUserData: PropTypes.func.isRequired,
  removeCurrent: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  functionAddUserData: (payload) => { dispatch(addUserData(payload)); },
  removeCurrent: () => { dispatch(resetCurrent()); },
});

// estadoGlobal = {
//   apliReducer: {
//     trivias: [],
//     userData: {
//       name: '',
//       email: '',
//     },
//   }
//   }

const mapStateToProps = (state) => ({
  userName: state.apiReducer.userData.name,
  userEmail: state.apiReducer.userData.email,
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
