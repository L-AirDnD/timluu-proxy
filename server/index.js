let express = require('express');
let app = express();
let path = require('path');

const port = process.env.port || 3000;

let staticPathway = path.join(__dirname, '../public');
let staticAssets = express.static(staticPathway);
app.use(staticAssets);

app.listen(port, () => {
  console.log(`Currently listening on port ${port}`);
})