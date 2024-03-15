import React from 'react';
import './ExpenseSummary.css';

const ExpenseSummary = ({ expenses }) => {
  const monthlyExpenses = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = 0;
    }
    acc[expense.category] += parseFloat(expense.amount);
    return acc;
  }, {});

  return (
    <div className="expense-summary">
      <h2>Total des dépenses par catégories :</h2>
      <table>
        <thead>
          <tr>
            <th>Catégorie</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(monthlyExpenses).map(([category, total]) => (
            <tr key={category} className={category.toLowerCase()}>
              <td>{category}</td>
              <td>{total.toFixed(2)} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseSummary;
