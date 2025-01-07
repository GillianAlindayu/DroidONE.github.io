const express = require('express');
const app = express();
const PORT = 3000;

// Sample timeline data
const timelineData = [
    { era: "Old Republic", year: "4000 BBY", event: "Formation of the Jedi Order" },
    { era: "Rise of the Empire", year: "19 BBY", event: "Anakin Skywalker becomes Darth Vader" },
    { era: "Rebellion", year: "0 BBY", event: "Battle of Yavin (Death Star destroyed)" },
    { era: "New Republic", year: "5 ABY", event: "Empire defeated at the Battle of Jakku" }
];

app.use(express.static('public')); // Serve static files (CSS, JS)

app.get('/api/timeline', (req, res) => {
    res.json(timelineData);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
