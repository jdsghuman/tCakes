import React, { Component } from "react";
import './Dropdown.scss';

class Dropdown extends Component {

  render() {
    const { options, showDropdown, click, dropdownClicked, triggerStyle, dropdownPosition, sortBy } = this.props;
    const dropdownOptions = options.map((option, i) => {
      return <button key={i} onClick={() => click(option)}>{option}</button>;
    });

    return (
      <div className="filter-status">
        <button className={`trigger`} style={triggerStyle ? triggerStyle : null} onClick={dropdownClicked}>
          <span>{sortBy}</span><svg className={`filter-carrot ${showDropdown ? "filter-carrot-open" : null}`} viewBox="0 0 140 140" width="9px" height="9px" xmlns="http://www.w3.org/2000/svg"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" fill="black" /></g></svg>
        </button>
        <div className={`dropdown ${showDropdown ? "show" : ""}`} style={dropdownPosition ? dropdownPosition : null}>
          {dropdownOptions}
        </div>
      </div>
    );
  }
}

export default Dropdown;
