const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/menuDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'));

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

app.get('/menu/:category', async (req, res) => {
  const category = req.params.category;
  try {
    const items = await MenuItem.find({ category });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.post('/menu', async (req, res) => {
  const { name, description, price, category } = req.body;
  try {
    const newItem = new MenuItem({ name, description, price, category });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
