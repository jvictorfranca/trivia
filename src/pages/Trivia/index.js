import React from 'react';

class Trivia extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
  }

  render() {
    return (
      <div>
        <h1>Teste</h1>
      </div>
    );
  }
}

export default Trivia;
