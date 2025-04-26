const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from the server side' });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpiont');
});

const port = 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});

// what is api
//1 separate api into logical resources
//2 expose structured, resur-based urls
//3 use http methods (verbs())
//4 send data as json(usyally)
//5 be stateless
