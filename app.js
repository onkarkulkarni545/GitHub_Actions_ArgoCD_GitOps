const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send('Helloo, THis is for testing of CICD pipeline using Github=Actions argocd \n');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
