import { prisma } from '../lib/primsa.js';

//% Continuing theory from visits-per-project.ts
//% Continuing theory from visits-per-project.ts
//% Continuing theory from visits-per-project.ts

export const getVisitsPerCountry = async () => {

    //* Old, single-table schema with only request-logs
	// const visitsPerCountry = await prisma.reqLog.groupBy({
	// 	by: ['country'],
	// 	_count: true, //% This is an AGGREGATE function (different from group-by) But it is a powerful combination.
	// 	orderBy: {
	// 		_count: {
	// 			country: 'desc', //! why are we selecting country again??? Is not that relevant.
	// 		},
	// 	},
	// });

	// await prisma.reqLog.deleteMany();

    //* New schema, prisma doesn't support aggregating by related‐model fields (for example, grouping reqLog by User.country). T
	const visitsPerCountry = await prisma.$queryRaw`
        SELECT "User"."country", COUNT(*) AS count
        FROM "reqLog"
        JOIN "User" ON "reqLog"."userId" = "User"."id"
        GROUP BY "User"."country"
        ORDER BY count DESC
    `;

	return visitsPerCountry;
};
