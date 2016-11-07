const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extendded": true}));

app.get('/', (req, res)=> {
  res.status(200).send('Hello Express.js');
});

app.get('/hello', (req, res)=> {
  res.status(200).send('Hello stranger!');
});

app.get('/hello/:name', (req, res)=> {
  let name = req.params.name;
  res.status(200).send(`Hello ${name}`);
});

app.all('/sub/*', (req, res)=> {
  let uri = req.url;
  res.status(200).send(`You request URI: ${uri}`);
});

app.post('/post', (req, res)=> {
  if (Object.keys(reqbody).length) {
    res.json(req.body);
  } else {
    res.sendStatus(404);
  }
});

app.listen(3000, ()=> {
  console.log('listening port 3000');
})
