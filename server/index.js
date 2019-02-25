let express = require('express');
let app = express();
let path = require('path');

const port = process.env.PORT || 3000;

let staticPathway = path.join(__dirname, '/../public/');
let staticAssets = express.static(staticPathway);
app.use(staticAssets);

app.get('/:offeringId', (req, res) => {
  res.sendFile(staticPathway);
});

app.listen(port, () => {
  console.log(`Currently listening on port ${port}`);
});