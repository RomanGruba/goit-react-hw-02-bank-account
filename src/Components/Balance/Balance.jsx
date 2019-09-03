import React from 'react';
import PropTypes from 'prop-types';

const Balance = ({ allDeposits, allWithdraws, balance }) => (
  <section className="balance">
    <span>⬆️{allDeposits}$</span>
    <span>⬇️{allWithdraws}$</span>
    <span>Balance: {balance}$</span>
  </section>
);

Balance.propTypes = {
  allDeposits: PropTypes.number.isRequired,
  allWithdraws: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Balance;
