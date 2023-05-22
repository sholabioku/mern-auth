import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`.yellow));
