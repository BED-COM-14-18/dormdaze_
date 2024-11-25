const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/submit-payment', (req, res) => {
  const paymentData = req.body;
  console.log('Payment data received:', paymentData);

  // Perform operations such as saving to a database
  // For now, we'll just send a success response
  res.status(200).send({ message: 'Payment data received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
