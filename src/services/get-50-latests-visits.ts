import { prisma } from "../lib/primsa.js";

export const get50LatestVisits = async () => {
    const latestsVisits = await prisma.reqLog.findMany({
        take: 50,
        select: {
            action: true,
            appName: true,
            created_at: true,
            user: {
                select: {
                    ip: true,
                    country: true
                }
            }
        },
        orderBy: {
            created_at: 'desc'
        }
    });


    //! Ignore the formatting for now
    return latestsVisits.map((visit: any) => ({
        ...visit,
        created_at: visit.created_at.toLocaleString('en-US', {
            timeZone: 'America/Hermosillo',
            month: 'short',  // e.g. Jan
            day: '2-digit',  // e.g. 05
            hour: '2-digit',
            minute: '2-digit',
            hour12: true    // 12-hour format
        })
    }));
};
