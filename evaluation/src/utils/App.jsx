import React, { useState } from 'react';
import ExpenseForm from '../component/ExpenseForm';
import ExpenseList from '../component/ExpenseList';
import ExpenseSummary from '../component/ExpenseSummary';
import PieChart from '../component/PieChart';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [showExpenseList, setShowExpenseList] = useState(true);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleToggleView = () => {
    setShowExpenseList(!showExpenseList);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Gestionnaire de dépenses personnelles</h1>
      </nav>
      <main>
        <ExpenseForm onAddExpense={handleAddExpense} />
        <div className="container">
          <div className="left-container">
            <PieChart expenses={expenses} />
          </div>
          <div className="right-container">
            <div className="toggle-buttons">
              <button className="toggle-button" onClick={handleToggleView}>Détails</button>
              <button className="toggle-button" onClick={handleToggleView}>Total</button>
            </div>
            <div className="toggle-content">
              {showExpenseList ? (
                <ExpenseList expenses={expenses} />
              ) : (
                <ExpenseSummary expenses={expenses} />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
