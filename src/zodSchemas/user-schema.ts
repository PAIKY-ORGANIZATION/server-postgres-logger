import { z } from 'zod'




export const addLogRequestSchema = z.object({
    body: z.object({
        ip: z.string(),
        country: z.string(),
        mainLogInfo: z.string(),
        additionalLogInfo: z.string().optional()
    })
})


export type AggLogRequestSchema = z.infer<typeof addLogRequestSchema>