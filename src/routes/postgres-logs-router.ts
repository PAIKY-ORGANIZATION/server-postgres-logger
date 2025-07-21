import { Router } from "express";
import { validate } from "../middleware/validateRequest.js";
import { addLog } from "../controllers/postgres-logs/add-log.js";


export const router = Router();


router.post('/logs/add', validate(addLog))

