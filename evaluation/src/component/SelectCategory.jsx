// src/components/SelectCategory.jsx
import React from 'react';

const SelectCategory = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      <option value="">Sélectionnez une catégorie</option>
      <option value="Alimentation">Alimentation</option>
      <option value="Logement">Logement</option>
      <option value="Transport">Transport</option>
      <option value="Divertissement">Divertissement</option>
      <option value="Santé">Santé</option>
      <option value="Éducation">Éducation</option>
      <option value="Autres">Autres</option>
    </select>
  );
};

export default SelectCategory;