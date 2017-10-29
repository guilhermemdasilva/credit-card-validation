import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameOnCard extends Component {
  static propTypes = {
    handleName: PropTypes.func,
  };

  handleOnChange = event => {
    this.props.handleName(event.target.value);
  };

  render() {
    return (
      <div className="name-on-card">
        <label>Name on card:</label>
        <input
          type="text"
          className="form-control"
          style={{ textTransform: 'uppercase' }}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default NameOnCard;
