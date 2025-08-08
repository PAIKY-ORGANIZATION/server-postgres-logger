import chalk from "chalk";
import { prisma } from "../lib/primsa.js"

export const getVisitsPerIp = async ()=>{

    console.log(chalk.red.inverse('LIMITING TO 30 ITEMS'));
    

    return await prisma.user.findMany({
        select: {
            _count: {
                select: {
                    requests: true,
                }
            },
            ip: true,
            country: true,
        },
        take: 30,
        orderBy: {
            requests: {
                _count: 'desc'
            } 
        }
    })    

}