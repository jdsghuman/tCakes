import React, { Component } from 'react';

class Icon extends Component {

  icons = {
    filter:
      ["M11.25 17a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 1 1 0-1.5zm-6.5-6h10.5a.75.75 0 0 1 .102 1.493l-.102.007H4.75a.75.75 0 0 1-.102-1.493L4.75 11h10.5zm0-6h14.5a.75.75 0 0 1 .102 1.493l-.102.007H4.75a.75.75 0 0 1-.102-1.493L4.75 5h14.5z"]
  }
  render() {
    const dimensions = this.props.dimensions ? { height: `${this.props.dimensions.height}px`, width: `${this.props.dimensions.width}px` } : null;
    const styles = this.props.fill ? { ...dimensions, fill: this.props.fill } : dimensions;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={this.props.viewBox ? this.props.viewBox : "0 0 1024 1024"}
        className={this.props.styles}
        onClick={this.props.onClick}
        fill={this.props.fill}
        style={styles}
      >
        {this.buildPaths()}
      </svg>
    )
  }
  
  buildPaths() {
    const identifiers = this.props.identifier.split(" ");
    const paths = [];
    identifiers.forEach(identifier => {
        paths.push(this.icons[identifier].map((path, index) => <path key={index} d={path} />));
    });
    return paths;
}
}

export default Icon;
