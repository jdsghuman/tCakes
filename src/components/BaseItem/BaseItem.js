import React, { Component } from 'react';
import { getDollarFormat } from '../Managers/PaymentManager';
import CupcakeIcon from '../Shared/Icons/CupcakeIcon';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Spinner from '../Shared/Spinner/Spinner';
import './BaseItem.css';

class BaseItem extends Component {
  render() {
    const { item, clicked, handleClick, optional } = this.props;
    return (
      <>
        {item ? item.map(item => {
          return <div
            key={item.key}
            onClick={() => handleClick(item.key, getDollarFormat(item.price), item.price)}
            className={`item ${clicked === item.key ? 'item-clicked' : ''} ${optional ? 'item-optional' : ''}`}>
            {clicked === item.key && <CheckCircleOutlineIcon className='item-selected-txt' />}
            <p className="item-price">{getDollarFormat(item.price)}</p>
            {this.getIcon(item.name)}
            <p className="item-title">{item.name}</p>
          </div>
        }) : <Spinner />}
      </>
    )
  }

  getIcon = (name) => {
    switch (name) {
      case 'Chocolate Base':
        return <CupcakeIcon fill="#8c253d" className="icon-cupcake" />
      case 'Vanilla Base':
        return <CupcakeIcon fill="#edebc4" className="icon-cupcake" />
      case 'Red Velvet Base':
        return <CupcakeIcon fill="#dd181e" className="icon-cupcake" />
      default:
        return;
    }
  }
}

export default BaseItem;