import { Request, Response } from 'express';

export const addLog = async(req: Request, res: Response)=>{
	console.log(req.url);
	console.log(req.body);
	
	res.send('OKK')
}