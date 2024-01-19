
import React from 'react';
import TransactionItem from '../TransactionItem/TransactionItem';
import './TransactionList.css';
function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transaction History</h2>
      <div>
        {Array.isArray(transactions) &&
          transactions.map((transaction, index) => (
            <TransactionItem key={index} transaction={transaction} />
          ))}
      </div>
    </div>
  );
}

export default TransactionList;
