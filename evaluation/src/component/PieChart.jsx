// src/components/PieChart.jsx

import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './PieChart.css';
import ExpenseSummary from './ExpenseSummary';

const PieChart = ({ expenses }) => {
  const chartRef = useRef();
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (!chartRef.current || expenses.length === 0) {
      return;
    }

    const ctx = chartRef.current.getContext('2d');

    if (!chartInstance) {
      const newChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: [],
          datasets: [{
            data: [],
            backgroundColor: []
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top'
            }
          }
        }
      });
      setChartInstance(newChartInstance);
    } else {
      const categories = expenses.map(expense => expense.category);
      const uniqueCategories = [...new Set(categories)];

      const categoryTotals = uniqueCategories.map(category => {
        return expenses.reduce((acc, expense) => {
          if (expense.category === category) {
            acc += parseFloat(expense.amount);
          }
          return acc;
        }, 0);
      });

      const backgroundColors = uniqueCategories.map(category => getCategoryColor(category));

      chartInstance.data.labels = uniqueCategories;
      chartInstance.data.datasets[0].data = categoryTotals;
      chartInstance.data.datasets[0].backgroundColor = backgroundColors;
      chartInstance.update();
    }
  }, [expenses, chartInstance]);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Alimentation':
        return '#FFC107'; 
      case 'Logement':
        return '#2196F3';
      case 'Transport':
        return '#4CAF50';
      case 'Divertissement':
        return '#E91E63';
      case 'Santé':
        return '#9C27B0';
      case 'Éducation':
        return '#b73a3a';
      case 'Autres':
        return '#FF5722';
      default:
        return '#000000';
    }
  };

  return (
      <div className="chart-wrapper">
        <canvas ref={chartRef}></canvas>
      </div>
  );
};

export default PieChart;
