import { Request, Response } from 'express';
import { AggLogRequestSchema } from '../../zodSchemas/user-schema.js';

export const addLog = async(req: Request<{}, {}, AggLogRequestSchema>, res: Response)=>{
	console.log(req.body);
	
	res.send('OKK')
}