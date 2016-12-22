import React, { Component } from 'react';
import logo from './ga.png';
import Account from './Account';

class App extends Component {
  constructor() {
    super();
    this.state = {
      acct1: {
        key: 'acct1',
        name: 'Checkings',
        balance: 0
      },
      acct2: {
        key: 'acct2',
        name: 'Savings',
        balance: 0
      }
    }
  }

  withdraw(val, key) {
    if (val > this.state[key].balance) {
      alert('Boy, bye.')
    } else if (isNaN(val)) {
      alert('Try an actual amount Irwin...')
    } else if (val < 0) {
      alert ('Nice try.')
    } else {
      this.setState({
        [key]: {
          key: key,
          name: this.state[key].name,
          balance: this.state[key].balance - val,
        }
      });
    }
  }

  deposit(val, key) {
    if (val < 0) {
      alert('Seriously Irwin?!');
    } else if (isNaN(val)) {
      alert('If money could talk...');
    } else {
      this.setState({
        [key]: {
          key: key,
          name: this.state[key].name,
          balance: this.state[key].balance + val,
        }
      })
    }
  }

  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        <Account acct={this.state.acct1} add={this.deposit.bind(this)} sub={this.withdraw.bind(this)} />
        <Account acct={this.state.acct2} add={this.deposit.bind(this)} sub={this.withdraw.bind(this)} />
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
