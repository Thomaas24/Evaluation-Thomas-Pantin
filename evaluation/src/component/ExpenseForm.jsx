import React, { useState } from 'react';
import SelectCategory from './SelectCategory';
import './ExpenseForm.css';

const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const newExpense = {
      ...expense,
      date: formattedDate, 
    };

    if (!expense.category || !expense.amount) {
        alert("Veuillez choisir une catégorie et saisir un montant.");
        return;
      }

    onAddExpense(newExpense);
    setExpense({
      description: '',
      amount: '',
      category: '',
    });
  };

  return (
    <div className="expense-form-container">
      <h2>Ajouter une dépense</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description :
          <input
            type="text"
            name="description"
            value={expense.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Montant :
          <input
            type="number"
            step="0.01"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
          />
        </label>
        <label>
          Catégorie :
          <SelectCategory value={expense.category} onChange={(value) => setExpense({ ...expense, category: value })} />
        </label>
        <button type="submit">Ajouter la dépense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
