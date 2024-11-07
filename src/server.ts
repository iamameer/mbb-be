import express from 'express';
import bookRouter from './routes/book.routes';
import { log } from './utils/logger';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Logger as middleware
app.use((req, res, next) => {
  log(req.method, `${req.originalUrl}`);
  next();
});

// Root route
app.use('/status', (req, res) => {
  res.send(`mbb-be is live!`);
});

// Library route
app.use('/library', bookRouter);

app.listen(PORT, () =>
  log('mbb-be', `Server running on http://localhost:${PORT}`),
);
