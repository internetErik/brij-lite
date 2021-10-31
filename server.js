const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./dist'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));

app.get('/*', (req, res) => {
  console.log(req.path)
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brij</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="app"></div>
    <script src="bundle.js"></script>
  </body>
  </html>
  `)
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});