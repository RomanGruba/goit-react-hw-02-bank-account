import React, { Component } from 'react';
import transactionType from '../Utils/transactionType';

const Controls = ({ transaction, addTransaction, handleSubmitTransaction }) => (
  <section className="controls">
    <input
      type="number"
      name="transaction"
      value={transaction}
      onChange={addTransaction}
    />
    <button
      type="button"
      onClick={handleSubmitTransaction}
      name={transactionType.deposit}
    >
      Deposit
    </button>
    <button
      type="button"
      onClick={handleSubmitTransaction}
      name={transactionType.withdraw}
    >
      Withdraw
    </button>
  </section>
);

export default Controls;
