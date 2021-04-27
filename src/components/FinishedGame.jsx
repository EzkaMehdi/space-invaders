import React from 'react';


class FinishedGame extends React.Component {

  render() {
    return (
      <button onClick={this.props.begin}> Go ! </button>
    )
  }
}



export default FinishedGame;
