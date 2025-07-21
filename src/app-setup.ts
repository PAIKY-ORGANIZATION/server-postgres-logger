import './bootstrap.js' // This  needs to be imported at the top in order for environment variables to be loaded successfully.

import express, { RequestHandler} from 'express';
import { router as usersRouter } from './routes/postgres-logs-router.js';
import {reqLogger} from 'req-logger-express'
import {errorMiddleware} from 'custom-exceptions-express'


const app = express();
app.use(express.json());


//Custom middleware
app.use(reqLogger as RequestHandler)
//Routes
app.use('/api',  usersRouter);



//Error Middleware
app.use(errorMiddleware) // Optional, recommended

// I exported the app for testing in vitest without running the server:
export default app
