const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/hello', (req, res) => {
  res.send('Helloo, THis is for testing of CICD pipeline using Github Actions argocd \n');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
