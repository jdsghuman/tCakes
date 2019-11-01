import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingCartTotal extends Component {
  render() {
    return (
      <>
        ({this.props.shoppingCart.length})
      </>
    );
  }
}

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart
});

export default connect(mapStateToProps)(ShoppingCartTotal);
