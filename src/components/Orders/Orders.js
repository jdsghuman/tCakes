import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../Shared/Logo/Logo';
import OrderIcon from '../Orders/OrderIcon';
import SimpleTable from '../SimpleTable/SimpleTable';
import Spinner from '../Shared/Spinner/Spinner';
import './Orders.css';

class Orders extends Component {
  state = {
    clickedItem: '',
    showDropdownDate: false,
    showDropdownFilter: false,
    tableDateDisplay: 'Ascending',
    filterChecked: ''
  };

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ORDERS' });
  }

  render() {
    const { myOrders } = this.props;
    return (
      <div className='container-fluid'>
        <div className='container-main'>
          <div className='heading-container'>
            <Logo />
            <h3 className='txt-heading-checkout'>My Orders</h3>
            <OrderIcon />
          </div>
          <div className='table-container'>
            {myOrders.orders ?
              <SimpleTable
                myOrders={myOrders}
                showDropdownDate={this.state.showDropdownDate}
                showDropdownFilter={this.state.showDropdownFilter}
                dropdownClicked={this.dropdownClicked}
                tableDateDisplay={this.state.tableDateDisplay}
                selectDateSortFilter={this.selectDateSortFilter}
                clearFilters={this.clearFilters}
                filterClicked={this.filterClicked}
                filterChecked={this.state.filterChecked}
                selectOrderFilter={this.selectOrderFilter}
              /> : <Spinner />
            }
          </div>
        </div>
      </div>
    )
  }

  clearFilters = () => {
    this.setState({
      filterChecked: ''
    });
  }

  dropdownClicked = (type) => {
    this.setState(prevState => ({
      ...prevState,
      [type]: !prevState[type]
    }));
    if (type === 'showDropdownDate') {
      this.setState({
        showDropdownFilter: false
      });
    } else if (type === 'showDropdownFilter') {
      this.setState({
        showDropdownDate: false
      });
    }
  }

  selectDateSortFilter = (selectedOption) => {
    this.setState(prevState => ({
      ...prevState,
      tableDateDisplay: selectedOption,
      showDropdownDate: !prevState.showDropdownDate,
    }));
  }

  selectOrderFilter = (selectedOption, event) => {
    this.setState({
      filterChecked: selectedOption
    });
    this.dropdownClicked("showDropdownFilter");
  }
}

const mapStateToProps = state => ({
  myOrders: state.myOrders
});

export default connect(mapStateToProps)(Orders);
