const express = require('express');

const app = express();
app.use(express.static(__dirname + '/client/public'));

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
  ];
  res.json(customers);
});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);