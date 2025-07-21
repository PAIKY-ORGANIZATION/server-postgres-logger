import { Request, Response } from 'express';

export const addLog = async(req: Request, res: Response)=>{
	console.log(req.url);
	res.send('OKK')
}