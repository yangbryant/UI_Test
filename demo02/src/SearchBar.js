import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.props.onChange} />
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} onChange={this.props.onChecked} />
          {' '} Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
