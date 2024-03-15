// ExpenseList.jsx

import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list-container">
      <h2>Liste des dépenses enregistrées</h2>
      <ul className="expense-list">
        {expenses.map((expense, index) => (
          <li key={index} className={`expense-list-item ${expense.category.toLowerCase()}`}>
            <strong>Le </strong> {expense.date},{" "}
            <strong>Description :</strong> {expense.description}{" "}
            <strong>Montant :</strong> {expense.amount}€{" "}
            <strong>Catégorie :</strong> {expense.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
