import React, { Component } from 'react';
import shortid from 'shortid';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';

// const date = new Date();

// const options = {
//   year: 'numeric',
//   month: 'long',
//   timezone: 'UTC',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric',
// };

export default class Dashboard extends Component {
  state = {
    transactions: [],
    transaction: '',
    balance: 0,
    allDeposits: 0,
    allWithdraws: 0,
  };

  addTransaction = e => {
    this.setState({
      transaction: e.target.value,
    });
  };

  handleSubmitTransaction = e => {
    e.preventDefault();
    const date = new Date();

    const options = {
      year: 'numeric',
      month: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    if (e.target.name === 'Deposit' && this.state.transaction > 0) {
      const newTransaction = {
        id: shortid.generate(),
        amount: this.state.transaction,
        type: e.target.name,
        date: date.toLocaleString('en', options),
      };
      this.setState(prevState => ({
        transactions: [...prevState.transactions, newTransaction],
        balance: prevState.balance + Number(newTransaction.amount),
        allDeposits: prevState.allDeposits + Number(newTransaction.amount),
        transaction: '',
      }));
    } else if (this.state.transaction === '0') {
      alert('Введите сумму для проведения операции!');
    }

    if (
      e.target.name === 'Withdraw' &&
      this.state.balance >= this.state.transaction &&
      this.state.transaction > 0
    ) {
      const newTransaction = {
        id: shortid.generate(),
        amount: this.state.transaction,
        type: e.target.name,
        date: date.toLocaleString('en', options),
      };
      this.setState(prevState => ({
        transactions: [...prevState.transactions, newTransaction],
        balance: prevState.balance - Number(newTransaction.amount),
        allWithdraws: prevState.allWithdraws + Number(newTransaction.amount),
        transaction: '',
      }));
    } else if (
      e.target.name === 'Withdraw' &&
      this.state.balance <= this.state.transaction
    ) {
      alert('На счету недостаточно средств для проведения операции!');
    }
  };

  render() {
    const { transaction, allDeposits, allWithdraws, balance } = this.state;
    return (
      <div className="dashboard">
        <Controls
          transaction={transaction}
          addTransaction={this.addTransaction}
          handleSubmitTransaction={this.handleSubmitTransaction}
        />
        <Balance
          allDeposits={allDeposits}
          allWithdraws={allWithdraws}
          balance={balance}
        />

        <table className="history">
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}$</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
