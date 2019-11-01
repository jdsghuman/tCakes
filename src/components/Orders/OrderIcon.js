import React, { Component } from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import './OrderIcon.css';

class OrderIcon extends Component {
  render() {
    return (
      <AccountBoxIcon onClick={this.handleMyOrders} className={`${this.props.classes.iconOrders} order-icon`} />
    );
  }
  handleMyOrders = () => {
    this.props.history.push('/orders');
  }
}

const styles = theme => ({
  iconOrders: {
    fontSize: '2rem'
  }
});

export default withRouter(withStyles(styles)(OrderIcon));