import React from 'react';
import {i18n} from './utils/i18n';
import NumberFormat from 'react-number-format';

class FilterChip extends React.Component {
  constructor(props) {
    super(props);

    this.removeCondition = this.removeCondition.bind(this);
    this.editCondition = this.editCondition.bind(this);
  }

  editCondition() {
    this.props.onEdit(this.props.id);
  }

  removeCondition() {
    this.props.onRemove(this.props.id);
  }

  render() {
    return(
      <div className="chip">
        <span onClick={this.editCondition}>
          <b>{this.props.label}</b> 
          &nbsp;
          {i18n(this.props.operator)}
          <b> 
          &nbsp;
          {this.props.type == 'number' ?
            <NumberFormat 
              value={this.props.value} 
              displayType={'text'} 
              thousandSeparator={this.props.thousandSeparator} 
              decimalSeparator={this.props.decimalSeparator} 
              prefix={this.props.numberPrefix} 
            />
          : this.props.value}
          </b>
          &nbsp;
        </span>
        <span onClick={this.removeCondition}>&times;</span>
      </div>
    )
  }
}

export default FilterChip;
