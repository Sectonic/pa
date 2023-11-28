import db from '@lib/prisma/client';
import * as fs from 'fs';
import typesData from '@public/json/typesData.json';

export default async function TypeStatistics({ filters }) {

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

        const typeInfo = {
            doubleActivations: {
                Sleep: ['Oe', 'De'],
                Play: ['Oi', 'Di'],
                Blast: ['Oe', 'Di'],
                Consume: ['Oi', 'De']
            },
            needOpposites: {
                Oe: 'Oi',
                Oi: 'Oe',
                Di: 'De',
                De: 'Di'
            }
        }

        const filteredTypes = typesData.types.filter(type => {
            return Object.entries(filters).every(([key, value]) => {
                return value.includes(type[key]);
            });
        });
    
        const stats = { 
            total: 0, 
            modalities: {}, 
            functions: {}, 
            animals: {}, 
            standardJumper: {}, 
            letterPairings: {}, 
            saviorFunctions: {}, 
            saviorAnimals: {},
            animalCombinations: {},
            saviorActivation: {},
            glassLizard: {},
        };
    
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

            // Modalities, Functions, Animals
            const typeSplit = type.type.split(' ');
            ['modalities', 'functions', 'animals'].forEach((category,i) => {
                if (!stats[category][typeSplit[i]]) {
                    stats[category][typeSplit[i]] = 0;
                }
                stats[category][typeSplit[i]] += type._count.people;
            });

            // Jumper vs Standard
            const countE = (typeSplit[1].match(/e/g) || []).length;
            const countI = (typeSplit[1].match(/i/g) || []).length;
            const standardJumper = (countE === 2 || countI === 2) ? 'Jumper' : 'Standard';
            if (!stats.standardJumper[standardJumper]) {
                stats.standardJumper[standardJumper] = 0;
            }
            stats.standardJumper[standardJumper] += type._count.people;

            // Letter Saviors
            const letterPairing = `${type.observerLetter}${type.deciderLetter}`;
            if (!stats.letterPairings[letterPairing]) {
                stats.letterPairings[letterPairing] = 0;
            }
            stats.letterPairings[letterPairing] += type._count.people;

            // Savior Functions
            [type.function1, type.function2].forEach(func => {
                if (!stats.saviorFunctions[func]) {
                    stats.saviorFunctions[func] = 0
                }
                stats.saviorFunctions[func] += type._count.people;
            });

            // Savior Animals
            [type.animal1, type.animal2].forEach(anim => {
                if (!stats.saviorAnimals[anim]) {
                    stats.saviorAnimals[anim] = 0
                }
                stats.saviorAnimals[anim] += type._count.people;
            });

            // Animal Combinations
            const saviorAnims = [type.animal1[0], type.animal2[0]].join('');
            let combinationKey;

            switch (saviorAnims) {
                case 'BP':
                    combinationKey = 'PB';
                    break;
                case 'CS':
                    combinationKey = 'SC';
                    break;
                case 'SB':
                    combinationKey = 'BS';
                    break;
                case 'PC':
                    combinationKey = 'CP';
                    break;
                default:
                    combinationKey = saviorAnims;
            }

            if (!stats.animalCombinations[combinationKey]) {
                stats.animalCombinations[combinationKey] ??= 0;
            }
            stats.animalCombinations[combinationKey] += type._count.people;

            // Double Activations
            const activatedNeeds = typeInfo.doubleActivations[type.animal4]
            const needStack = type.oD === 'Observer' ? 
                [type.observerNeed, type.deciderNeed, typeInfo.needOpposites[type.deciderNeed], typeInfo.needOpposites[type.observerNeed]] 
                : [type.deciderNeed, type.observerNeed, typeInfo.needOpposites[type.observerNeed], typeInfo.needOpposites[type.deciderNeed]];
            let stackActivation = '';
            needStack.forEach((need, i) => {
                if (activatedNeeds.includes(need)) {
                    if (stackActivation.length === 0) {
                        stackActivation += String(i + 1);
                    } else {
                        stackActivation += `+${i + 1}`;
                    }
                }
            })
            
            const saviorActivated = String(stackActivation === '1+2');
            if (!stats.saviorActivation[saviorActivated]) {
                stats.saviorActivation[saviorActivated] = 0;
            }
            stats.saviorActivation[saviorActivated] += type._count.people;

            const glassLizard = String(stackActivation.includes('4'));
            if (!stats.glassLizard[glassLizard]) {
                stats.glassLizard[glassLizard] = 0;
            }
            stats.glassLizard[glassLizard] += type._count.people;

        });
    
        return stats;

    };

    const stats = getStatistics();

    return (
        <pre>
            { JSON.stringify(stats, null, 2) }
        </pre>
    )
}