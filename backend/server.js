import express from 'express';
import colors from 'colors';
const port = 5000;

const app = express();

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => console.log(`Server started on port ${port}`.yellow));
