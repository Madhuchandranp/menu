import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from './components/MenuItem';
import Navbars from './components/Navbars'; 
import './App.css';

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [category, setCategory] = useState('drinks');

  useEffect(() => {
    axios.get(`http://localhost:5000/menu/${category}`)
      .then(response => setMenuItems(response.data))
      .catch(error => console.error("Error fetching menu items:", error));
  }, [category]);

  return (
    <div className="menu-page">
       <Navbars />
      <header>
        <h1> MENU</h1>
        <div><p>please take a look at our menu featuring food,drinks,branch.if you'd like
        to place an order use the "Order Online " button located below the menu.
      </p></div>
        <nav>
          <button onClick={() => setCategory('food')}>Food</button>
          <button onClick={() => setCategory('drinks')}>Drinks</button>
          <button onClick={() => setCategory('brunch')}>Brunch</button>
        </nav>
      </header>

      <section className="menu-content">
        <h2>{category.toUpperCase()} MENU</h2>
        <div className="menu-items">
          {menuItems.map(item => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      </section>

      <footer>
        <div className="contact-info">
          <p>Connect with us:</p>
          <p>📞 +91 9567483340</p>
          <p>✉️ info@deepnetsoft.com</p>
        </div>
        <div className="address">
          <p>First Floor, Geo Infopark, Infopark EPV, Kakkanad</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
