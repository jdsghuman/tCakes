import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import OrderIcon from '../Orders/OrderIcon';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartTotal from '../ShoppingCartTotal/ShoppingCartTotal';
import BaseItem from '../BaseItem/BaseItem';
import Button from '@material-ui/core/Button';
import Logo from '../Shared/Logo/Logo';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import './Home.css';

class Home extends Component {
  state = {
    selectedBase: '',
    selectedBasePrice: '',
    checkoutBasePrice: '',
    selectedFrosting: '',
    selectedFrostingPrice: '',
    checkoutFrostingPrice: '',
    selectedTopping: '',
    selectedToppingPrice: '',
    checkoutToppingPrice: ''
  }
  render() {
    const { bases, classes, frostings, shoppingCart, toppings } = this.props;
    return (
      <div className='container-fluid'>
        <div className='container-main'>
        <div className='heading-container'>
          <Logo />
          <h1 className='txt-heading'>tCakes</h1>
          <OrderIcon />
        </div>
          <h3 className='txt-steps'>Select a base:</h3>
          <div className='scroll-container'>
            <BaseItem
              item={bases}
              handleClick={this.handleClickItem}
              clicked={this.state.selectedBase}
            />
          </div>
          <h3 className='txt-steps'>Select a Frosting:</h3>
          <div className='scroll-container scroll-container-optional'>
            <BaseItem
              item={frostings}
              optional={true}
              handleClick={this.handleClickItem}
              clicked={this.state.selectedFrosting}
            />
          </div>
          <h3 className='txt-steps'>Select a Topping:</h3>
          <div className='scroll-container scroll-container-optional'>
            <BaseItem
              item={toppings}
              optional={true}
              handleClick={this.handleClickItem}
              clicked={this.state.selectedTopping}
            />
          </div>
          <div className="btn-checkout-container">
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              onClick={this.handleAddToCart}
              disabled={this.validateAddToCartButton()}
            >
              <AddIcon className={classes.btnIcon} />
              Add to Cart
            </Button>
            <Button 
              onClick={this.handleViewCart} 
              variant="contained" 
              color="secondary" 
              className={`${classes.button} ${classes.btnViewCart}`}>
              <ShoppingCartIcon className={classes.btnIcon} />
              View Cart {shoppingCart.length > 0 && <ShoppingCartTotal />}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  clearSelectedItems = () => {
    this.setState({
      selectedBase: '',
      selectedBasePrice: '',
      checkoutBasePrice: '',
      selectedFrosting: '',
      selectedFrostingPrice: '',
      checkoutFrostingPrice: '',
      selectedTopping: '',
      selectedToppingPrice: '',
      checkoutToppingPrice: ''
    });
  }

  handleAddToCart = () => {
    const cupcake = {
        base: this.state.selectedBase,
        basePrice: this.state.checkoutBasePrice,
        frosting: this.state.selectedFrosting,
        frostingPrice: this.state.checkoutFrostingPrice,
        topping: this.state.selectedTopping,
        toppingPrice: this.state.checkoutToppingPrice
      }

    // Use this cupcake object for /order
    const cupcakes = {
      base: this.state.selectedBase,
      frosting: this.state.selectedFrosting,
      topping: this.state.selectedTopping
    }

    this.props.dispatch({ type: 'ADD_TO_CART', payload: cupcake });
    this.props.dispatch({ type: 'CREATE_CUPCAKE_ORDER', payload: cupcakes });
    this.clearSelectedItems();
  }

  handleClickItem = (itemKey, price, checkoutPrice) => {
    if (itemKey.includes('Base')) {
      this.setState({
        selectedBase: itemKey,
        selectedBasePrice: price,
        checkoutBasePrice: checkoutPrice
      });
    }

    if (itemKey.includes('Frosting')) {
      this.setState({
        selectedFrosting: itemKey,
        selectedFrostingPrice: price,
        checkoutFrostingPrice: checkoutPrice
      });
    }

    if (itemKey.includes('sprinkles') || itemKey.includes('Flakes') || itemKey.includes('Bears')) {
      this.setState({
        selectedTopping: itemKey,
        selectedToppingPrice: price,
        checkoutToppingPrice: checkoutPrice
      });
    }
  }

  handleViewCart = () => {
    this.props.history.push('/checkout');
  }

  validateAddToCartButton = () => {
    return this.state.selectedBase === '' ||
      this.state.selectedFrosting === '' ||
      this.state.selectedTopping === '' ? true : false
  }
}

const mapStateToProps = state => ({
  bases: state.bases.bases,
  frostings: state.frostings.frostings,
  toppings: state.toppings.toppings,
  shoppingCart: state.shoppingCart
});

const styles = theme => ({
  button: {
    maxWidth: '200px',
    border: '1px solid #e82e37',
    margin: '0 auto',
    marginTop: '20px',
  },
  btnIcon: {
    marginRight: '6px'
  },
  btnViewCart: {
    width: '190px',
    marginBottom: '20px',
    background: '#e82e37'
  },
  iconOrders: {
    fontSize: '2rem'
  }
});

export default withRouter(withStyles(styles)(connect(mapStateToProps)(Home)));
