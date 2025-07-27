


import { prisma } from "../lib/primsa.js";



//% Using "Group By" will look at hundreds of project names and will group repeated ones in an array of {appName: 'projectName'}[]
//% So without any editing, postgres will give a table where the only values are the appName.
// const visitsPerProject = await prisma.reqLog.groupBy({
//     by: ['appName'],
// })




// Example:
// [
//   { appName: 'AWS_Standard_API' },
//   { appName: 'User_Manager_API' },
//   { appName: 'Redis_Cache_API' },
//   { appName: 'projects-frontend' },
//   { appName: 'Oauth_API' },
//   { appName: 'RDS_db_project' },
//   { appName: 'Portfolio' }
// ]

 
//* Continuation from above

export const getVisitsPerProject = async()=>{
    const visitsPerProject = await prisma.reqLog.groupBy({
        by: ['appName'],
    
    
        _count: true,  //% This is an AGGREGATE function (different from group-by) But it is a powerful combination.

        orderBy: {
            _count: {
                appName: 'desc', //! why are we selecting appName again??? Is not that relevant.
            }
        }
        
    })
    
    return visitsPerProject
}    

