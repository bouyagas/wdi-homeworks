import React, { Component } from 'react';

export default class Account extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeClass = this.changeClass.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: parseInt(event.target.value)
    });
  }

  changeClass() {
    if (this.props.acct.balance <= 0) {
      return 'balance zero';
    } else {
      return 'balance';
    }
  }

  render() {
    return (
      <div className='account'>
        <h2>TODO: {this.props.acct.name}</h2>
        <div className={this.changeClass()}> ${this.props.acct.balance}</div>
        <input type="text" placeholder="enter an amount" onChange={this.handleChange} />
        <input type="button" value="Deposit" onClick={() => this.props.add(this.state.value, this.props.acct.key)} />
        <input type="button" value="Withdraw" onClick={() => this.props.sub(this.state.value, this.props.acct.key)}/>
      </div>
    )
  }
}

