import React, { Component } from 'react';
import propTypes from 'prop-types';
import MD5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class HeaderFeedback extends Component {
  constructor() {
    super();
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
        <img
          src={ imgURL }
          alt={ userName }
          data-testid="header-profile-picture"
        />
        <span data-testid="header-player-name">{ `${userName}` }</span>
        <span data-testid="header-score">{ userScore }</span>
      </header>
    );
  }
}

HeaderFeedback.propTypes = {
  userEmail: propTypes.string.isRequired,
  userName: propTypes.string.isRequired,
  userScore: propTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.apiReducer.userData.email,
  userName: state.apiReducer.userData.name,
  userScore: state.apiReducer.userData.score,
});

export default connect(mapStateToProps)(HeaderFeedback);
