import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import MD5 from 'crypto-js/md5';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y',
    };
    this.fetchImgSrc = this.fetchImgSrc.bind(this);
  }

  componentDidMount() {
    this.fetchImgSrc();
  }

  fetchImgSrc() {
    const { userEmail } = this.props;
    const hashed = MD5(userEmail).toString();
    this.setState({
      imgURL: `https://www.gravatar.com/avatar/${hashed}`,
    });
  }

  render() {
    const { userName, userScore } = this.props;
    const { imgURL } = this.state;
    return (
      <header>
        <h1 data-testid="header-player-name">{userName}</h1>
        <h2 data-testid="header-score">{userScore}</h2>
        <img src={ imgURL } alt="Your avatar" data-testid="header-profile-picture" />
      </header>
    );
  }
}

Header.propTypes = {
  userName: propTypes.string.isRequired,
  userScore: propTypes.number.isRequired,
  userEmail: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userName: state.apiReducer.userData.name,
  userEmail: state.apiReducer.userData.email,
  userScore: state.apiReducer.userData.score,
});
export default connect(mapStateToProps, null)(Header);
