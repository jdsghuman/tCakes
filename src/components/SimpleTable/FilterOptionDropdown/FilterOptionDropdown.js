import React, { Component } from 'react';
import SelectOption from '../SelectOption';
import './FilterOptionDropdown.scss';

class FilterOptionDropdown extends Component {
  render() {
    const { clearFilters, dropdownClicked, dropdownStyle, options, showDropdown, sortBy } = this.props;

    return (
      <div className='filter-status-multiple'>
        <button className={`trigger`} onClick={dropdownClicked}>
          <span>{sortBy}</span><svg className={`filter-carrot ${showDropdown ? 'filter-carrot-open' : null}`} viewBox="0 0 140 140" width="9px" height="9px" xmlns="http://www.w3.org/2000/svg"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" fill="black" /></g></svg>
        </button>
        <div className={`dropdown-multiple ${showDropdown ? 'show' : ''}`} style={dropdownStyle ? dropdownStyle : null}>
          <p className={'dropdown-header'}>BASES</p>
          {options.map((option, index) => {
            return (
              <SelectOption
                option={option}
                groupName={'base'}
                key={index}
                selectOrderFilter={this.props.selectOrderFilter}
                filterChecked={this.props.filterChecked}
                type='radio'
              />
            );
          })
          }
          <div className='btn-dropdown-container'>
            <button onClick={clearFilters} className={`btn-dropdown btn-dropdown-clear`} data-qa='filter-clear-btn'>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterOptionDropdown;
