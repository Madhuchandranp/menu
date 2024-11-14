import React from 'react';
import './MenuItem.css';

function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <h3>{item.name} <span className="price">${item.price}</span></h3>
      <p>{item.description}</p>
    </div>
  );
}

export default MenuItem;
