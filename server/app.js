const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});


app.use((req, res, next) => {
  let error = new Error("Sorry, the requested resource couldn't be found.");
  res.status(404)
  next(error);
});

app.use((err, req, res, next) => {
  let resBody = {'message' : err.message};
  resBody.StatusCode = res.statusCode || 500;
  res.json(resBody);
});


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
