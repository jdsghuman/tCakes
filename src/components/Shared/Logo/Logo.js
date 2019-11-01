import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <h3 onClick={this.handleClickLogo} className='txt-heading-logo'>tC</h3>
    )
  }

  handleClickLogo = () => {
    this.props.history.push('/');
  }
}

export default withRouter(Logo);
