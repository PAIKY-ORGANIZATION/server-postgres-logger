import { Request, Response } from 'express';
import { AggLogRequestSchema } from '../../zodSchemas/user-schema.js';
import { prisma } from '../../lib/primsa.js';

export const addLog = async(req: Request<{}, {}, AggLogRequestSchema>, res: Response)=>{
	await prisma.reqLog.create({
		data: req.body //$ Pass the body AS IS. It should perfectly map the schema.prisma from the http request we receive
	})
	
	
	res.send('OKK')
}


