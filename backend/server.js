import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`.yellow));
