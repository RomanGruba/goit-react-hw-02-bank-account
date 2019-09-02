import React from 'react';

const Balance = ({ allDeposits, allWithdraws, balance }) => (
  <section className="balance">
    <span>⬆️{allDeposits}$</span>
    <span>⬇️{allWithdraws}$</span>
    <span>Balance: {balance}$</span>
  </section>
);

export default Balance;
