import React, { Component } from 'react';
import './SelectOption.css';

class SelectOption extends Component {

  render() {
    const { filterChecked, index, option } = this.props;
    return (
      <button className={`btn-status-option ${option === filterChecked ? 'btn-status-option-selected' : ''}`} onClick={() => this.props.selectOrderFilter(option)} key={index}>
        {option}
      </button>
    );
  }
}

export default SelectOption;
