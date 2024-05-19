const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const userRoutes = require('./routes/userRoutes');
const louageRoutes = require('./routes/louageRoutes');
const chauffeurRoutes = require('./routes/chauffeurRoutes');
const passengerRoutes = require('./routes/passengerRoutes'); 

// Create express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/users', userRoutes);
app.use('/louages', louageRoutes);
app.use('/chauffeurs', chauffeurRoutes);
app.use('/passengers', passengerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://mohamedalibaccouche:baccouche@cluster0.tqytr4u.mongodb.net/Louaji?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful database connection
    const port = process.env.PORT || 5000;
    app.listen(port, '0.0.0.0', () => {
      console.log(`Node API app is running on http://0.0.0.0:${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
