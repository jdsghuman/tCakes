import React, { Component } from 'react';
import { getDollarFormat, getSubtotal, getTaxAmount, getTotalAmount } from '../Managers/PaymentManager';
import Logo from '../Shared/Logo/Logo';
import OrderIcon from '../Orders/OrderIcon';
import './Checkout.css';

import { connect } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import ShoppingCartTotal from '../ShoppingCartTotal/ShoppingCartTotal';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

class Checkout extends Component {
  state = {
    subtotal: '',
    deliveryDate: ''
  }

  componentDidMount() {
    this.buildSubtotal();
  }

  render() {
    const { classes, shoppingCart } = this.props;
    return (
      <div className='container-fluid'>
        <div className='container-main'>
          <div className='heading-container'>
            <Logo />
            <h3 className='txt-heading-checkout'>Checkout <span className='title-cart-count'>{shoppingCart.length > 0 && <ShoppingCartTotal />}</span></h3>
            <OrderIcon />
          </div>
          <div className='item-detail-container'>
            {shoppingCart.length > 0 && <p className='txt-order-details'>Order Details</p>}
            {shoppingCart.map((item, index) => {
              return <p className={'item-detail-txt'} key={index}>{item.base} / {item.frosting}/ {item.topping} - {getDollarFormat(getSubtotal(item.basePrice, item.frostingPrice, item.toppingPrice))}</p>
            })}
            {shoppingCart.length > 0 &&
              <>
                {this.state.deliveryDate !== '' && this.validateDateSelected() ?
                  <p className='txt-order-details txt-date-validation-warning'>Please choose a delivery date more than 24 hours in the future</p> :
                  <p className='txt-order-details'>Please choose a delivery date &amp; time</p>}
                <form className={classes.container} noValidate>
                  <TextField
                    id="datetime-local"
                    label="Select Delivery Date/Time"
                    type="datetime-local"
                    value={this.state.deliveryDate}
                    onChange={this.handleDateChange}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
              </>
            }
          </div>
          {shoppingCart.length > 0 ?
            <div className='checkout-details-container'>
              <p className='txt-order-summary'>Order Summary</p>
              <p className='txt-order-summary-details'>Subtotal: {getDollarFormat(Number(this.state.subtotal))}</p>
              <p className='txt-order-summary-details'>Delivery Charge: {getDollarFormat(150)}</p>
              <p className='txt-order-summary-details'>Tax: ${getTaxAmount(Number(this.state.subtotal))}</p>
              <p className='txt-total'>Order Total: ${getTotalAmount(Number(this.state.subtotal))}</p>
            </div> :
            <div className='txt-empty-cart'>
              <p>Your cart is currently empty.</p>
            </div>
          }
          <div className="btn-checkout-container">
            <Button
              onClick={() => this.props.history.goBack()}
              color="secondary"
              className={`${classes.button} ${classes.btnContinue}`}>
              <ArrowBackIcon className={classes.iconStyle} />
              Continue Shopping
            </Button>
            <Button
              onClick={this.handlePlaceOrder}
              variant="contained"
              color="secondary"
              disabled={this.validatePlaceOrderButton()}
              className={`${classes.button} ${classes.btnViewCart}`}>
              Place Order
            </Button>
          </div>
        </div>
      </div>
    );
  }

  buildSubtotal = () => {
    let subtotal = 0;
    this.props.shoppingCart.map(item => {
      return subtotal += item.basePrice + item.frostingPrice + item.toppingPrice;
    })
    this.setState({ subtotal });
    return <p>{getDollarFormat(subtotal)}</p>
  }

  clearCheckout = () => {
    this.setState({
      subtotal: '',
      deliveryDate: ''
    })
  }

  handleDateChange = (e) => {
    this.setState({
      deliveryDate: e.target.value
    });
  }

  handlePlaceOrder = () => {
    const payload = {
      "order": {
        "delivery_date": this.state.deliveryDate,
        "cupcakes": this.props.cupcakeToSendInOrder
      }
    }
    this.props.dispatch({ type: 'PLACE_ORDER', payload });
    this.props.dispatch({ type: 'CLEAR_CART' });
    this.props.dispatch({ type: 'CLEAR_CUPCAKE_ORDER' });
    this.clearCheckout();
  }

  validatePlaceOrderButton = () => {
    return this.validateDateSelected();
  }

  validateDateSelected = () => {
    let currentTime = moment();
    let dateSelected = moment(this.state.deliveryDate);
    return currentTime.diff(dateSelected, 'h') <= -24 ? false : true;
  }
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 0,
    marginRight: theme.spacing(1),
    width: 225,
  },
  button: {
    maxWidth: '220px',
    margin: '0 auto',
    marginTop: '20px',
  },
  btnContinue: {
    width: '220px'
  },
  btnIcon: {
    marginRight: '6px'
  },
  btnViewCart: {
    width: '190px',
    marginBottom: '20px',
    background: '#e82e37'
  },
  iconStyle: {
    marginRight: '5px'
  }
});

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart,
  cupcakeToSendInOrder: state.cupcakeToSendInOrder
});

export default withRouter(withStyles(styles)(connect(mapStateToProps)(Checkout)));