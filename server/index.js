let express = require('express');
let app = express();
let path = require('path');
let axios = require('axios');

const port = process.env.port || 3000;

let staticPathway = path.join(__dirname, '../public');
let staticAssets = express.static(staticPathway);
app.use(staticAssets);

app.get('/:offeringId', (req, res) => {
  axios.get(`http://localhost:3002/${req.params.offeringId}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    }); 
})

app.listen(port, () => {
  console.log(`Currently listening on port ${port}`);
})