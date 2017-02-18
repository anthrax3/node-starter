import { createServer } from 'http';

const port = process.env.PORT || 3000;

createServer((request, response) => {
  response.write('<div style="padding: 20px"><h1>Neutrino</h1><p>Welcome to Node</p></div>');
})
.listen(port, () => console.log(`Running on :${port}`));
