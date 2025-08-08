import { prisma } from "../lib/primsa.js"

export const getVisitCount = async ()=>{

    const count = await prisma.reqLog.count()
    
    return count
}