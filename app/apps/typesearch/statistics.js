import db from '@lib/prisma/client';
import * as fs from 'fs';
import typesData from '@public/json/typesData.json';

export default async function TypeStatistics({ filters }) {

    const allWeirdTypes = await db.typeData.findMany({
        where: {
            OR: [
                { type: { contains: 'CB/C(S)' } },
                { type: { contains: 'BC/P(B)' } },
                { type: { contains: 'SS/B(P)' } }
            ]
        },
        include: {
            people: true
        }
    })

    console.log(allWeirdTypes);

    // var allTypesCount = 0;
    // const allTypes = await db.typeData.findMany({
    //     include: {
    //         _count: {
    //             select: {
    //                 people: true
    //             }
    //         }
    //     }
    // });

    // const incompletes = ['Ox', 'Dx', 'x', 'De', 'Oe', 'Oi', 'Di', 'Nx', 'Tx', 'Sx', 'Fx', 'FX', 'XF', 'MX', 'XM'];
    // const filteredAllTypes = allTypes.filter(type => {
    //     if (!incompletes.some(incomplete => type.type.includes(incomplete))) {
    //         allTypesCount += type._count.people;
    //         return type;
    //     }
    // });
    // fs.writeFile('public/json/typesData.json', JSON.stringify({ count: allTypesCount, types: filteredAllTypes }, null, 2), (err) => console.log(err));

    const getStatistics = () => {

        const filteredTypes = typesData.types.filter(type => {
            return Object.entries(filters).every(([key, value]) => {
                return value.includes(type[key]);
            });
        });
    
        const stats = { total: 0, modalities: {}, functions: {}, animals: {} };
    
        filteredTypes.forEach(type => {
            Object.entries(type).forEach(([key, value]) => {

                if (!['id', 'type', '_count', 'mbti'].includes(key)) {
                    if (!stats[key]) {
                        stats[key] = {};
                    }
        
                    if (!stats[key][value]) {
                        stats[key][value] = 0;
                    }
        
                    stats[key][value] += type._count.people;
                }

            });

            stats.total += type._count.people;
            const [modalities, functions, animals] = type.type.split(' ');

            if (!stats.modalities[modalities]) {
                stats.modalities[modalities] = 0;
            }

            if (!stats.functions[functions]) {
                stats.functions[functions] = 0;
            }

            if (!stats.animals[animals]) {
                stats.animals[animals] = 0;
            }

            stats.modalities[modalities] += type._count.people;
            stats.functions[functions] += type._count.people;
            stats.animals[animals] += type._count.people;

        });
    
        return stats;

    };

    const stats = getStatistics();

    console.log(filters);
    console.log(stats);

    return (
        <div>

        </div>
    )
}