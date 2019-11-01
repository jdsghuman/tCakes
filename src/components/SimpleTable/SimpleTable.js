import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import Dropdown from '../Shared/Dropdown/Dropdown';
import Icon from '../Shared/Icons/Icon';
import './SimpleTable.css';
import FilterOptionDropdown from './FilterOptionDropdown/FilterOptionDropdown';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function createData(delivery_date, base, frosting, topping, id) {
  return { delivery_date, base, frosting, topping, id };
}

export default function SimpleTable(props) {
  const classes = useStyles();
  const itemsToDisplay = []
  const rows = props.myOrders.orders.filter((order, i) => {
    if (props.filterChecked) {
      for (let item of order.cupcakes) {
        if (item.base !== props.filterChecked) {
          return false;
        }
      }
    }
    return true;
  }).sort((a, b) => {
    a = a.delivery_date;
    b = b.delivery_date;

    if (props.tableDateDisplay === 'Ascending') {
      return a > b ? -1 : a < b ? 1 : 0;
    } else {
      return a < b ? -1 : a > b ? 1 : 0;
    }
  })

  rows.map(row => {
    return row.cupcakes.map(order => {
      return itemsToDisplay.push(createData(moment(row.delivery_date).format('LLL'), order.base, order.frosting, order.topping, row.id));
    });
  })

  return (
    <>
      <div className='orders-dropdown-container'>
        <Dropdown
          showDropdown={props.showDropdownDate}
          options={['Ascending', 'Descending']}
          dropdownClicked={() => props.dropdownClicked('showDropdownDate')}
          sortBy={props.tableDateDisplay}
          click={props.selectDateSortFilter}
        />
        <div className='orders-filter-container' style={{ display: 'flex' }}>
          <Icon
            identifier='filter'
            viewBox='0 0 24 24'
            styles='msg-icon-filter'
            onClick={() => props.dropdownClicked('showDropdownFilter')}
          />
          <FilterOptionDropdown
            showDropdown={props.showDropdownFilter}
            dropdownClicked={() => props.dropdownClicked('showDropdownFilter')}
            sortBy={'Filter'}
            dropdownStyle={{ height: '250px' }}
            clearFilters={props.clearFilters}
            selectOrderFilter={props.selectOrderFilter}
            filterChecked={props.filterChecked}
            options={['chocolateBase', 'vanillaBase', 'redVelvetBase']}
          />
          {props.filterChecked && <span style={{ background: '#0bc0ff', borderRadius: '4px', padding: '4px', color: '#fff', fontSize: '.8rem' }}>Filter (1)</span>}
        </div>
      </div>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Delivery Date</StyledTableCell>
              <StyledTableCell align="right">Base</StyledTableCell>
              <StyledTableCell align="right">Frosting</StyledTableCell>
              <StyledTableCell align="right">Toppings</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsToDisplay.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {row.delivery_date}
                </TableCell>
                <TableCell align="right">{row.base}</TableCell>
                <TableCell align="right">{row.frosting}</TableCell>
                <TableCell align="right">{row.topping}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}
