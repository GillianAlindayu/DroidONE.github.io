const express = require('express');
const app = express();
const PORT = 3000;

// Sample shop items
const shopItems = [
  {
    id: 1,
    name: "Lightsaber",
    description: "A weapon for a more civilized age.",
    price: 199.99,
    image: "https://via.placeholder.com/200?text=Lightsaber"
  },
  {
    id: 2,
    name: "Stormtrooper Helmet",
    description: "Iconic helmet of the Empire's soldiers.",
    price: 89.99,
    image: "https://via.placeholder.com/200?text=Helmet"
  },
  {
    id: 3,
    name: "Baby Yoda Plush",
    description: "Adorable plush of The Child.",
    price: 24.99,
    image: "https://via.placeholder.com/200?text=Baby+Yoda"
  }
];

// Serve static files
app.use(express.static('public'));

// API route to get shop items
app.get('/api/shop-items', (req, res) => {
  res.json(shopItems);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
