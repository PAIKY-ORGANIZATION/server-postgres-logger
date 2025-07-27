import { Request, Response } from 'express';
import { AggLogRequestSchema } from '../../zodSchemas/user-schema.js';
import { prisma } from '../../lib/primsa.js';

export const addLog = async(req: Request<{}, {}, AggLogRequestSchema>, res: Response)=>{


	//$ Two tables: reqLog, user
	//$ A  user can have many logs, and a log can only have one user	

	const {ip, country, appName, action, additionalLogInfo} = req.body

	//* Upserting user (Ip)
	const user = await prisma.user.upsert({
		where: {
			ip: ip
		},
		update: {},
		create: {
			ip,
			country
		}
	})


	console.log(user);
	


	await prisma.reqLog.create({
		data: {
			action,
			appName,
			additionalLogInfo,
			userId: user.id
		} //$ Pass the body AS IS. It should perfectly map the schema.prisma from the http request we receive
	})
	
	
	res.send('OKK')
}


