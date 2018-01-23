import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './FilterableProductTable.css';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChange(e) {
    this.setState({
      filterText: e.target.value,
    });
  }

  handleChecked(e) {
    this.setState({
      inStockOnly: e.target.checked,
    });
  }

  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onChange={this.handleChange}
          onChecked={this.handleChecked}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
