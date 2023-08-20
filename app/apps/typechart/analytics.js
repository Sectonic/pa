import { getTypeData } from "@lib/getTypeData";
import { everyType } from "./type_spreadsheet";

const values = {
    extroversion: {
        multiplier: {
            animals: 32,
            functions: 1,
            modalities: 8
        },
        animals: {
            'SC/B(P)': 15,
            'CS/B(P)': 14,
            'SC/P(B)': 13,
            'BS/C(P)': 12,
            'SB/C(P)': 11,
            'CS/P(B)': 10,
            'PC/S(B)': 9,
            'CP/S(B)': 8,
            'BS/P(C)': 7,
            'SB/P(C)': 6,
            'BP/S(C)': 5,
            'PC/B(S)': 4,
            'CP/B(S)': 3,
            'PB/S(C)': 2,
            'BP/C(S)': 1,
            'PB/C(S)': 0,
        },
        functions: {
            // Letters of functions
            TS: 0,
            TN: 1,
            ST: 2,
            SF: 3,
            NT: 4,
            NF: 5,
            FS: 6,
            FN: 7,     
        },
        modalities: {
            MM: 0,
            MF: 1,
            FM: 2,
            FF: 3,     
        }  
    },
    gather: {
        multiplier: {
            animals: 32,
            modalities: 8,
            letters: 1
        },
        animals: {
            'BS/P(C)': 15,
            'SB/P(C)': 14,
            'BS/C(P)': 13,
            'SB/C(P)': 12,
            'BP/S(C)': 11,
            'SC/B(P)': 10,
            'PB/S(C)': 9,
            'CS/B(P)': 8,
            'BP/C(S)': 7,
            'SC/P(B)': 6,
            'PB/C(S)': 5,
            'CS/P(B)': 4,
            'PC/B(S)': 3,
            'CP/B(S)': 2,
            'PC/S(B)': 1,
            'CP/S(B)': 0,
        },
        letters: {
            // CONSUME LETTERS
            'Observer ST': 0,
            'Decider ST': 1,
            'Observer SF': 2,
            'Decider SF': 3,
            'Decider NT': 4,
            'Observer NT': 5,
            'Decider NF': 6,
            'Observer NF': 7
        },
        modalities: {
            // BLAST MODALITY
            MM: 3,
            MF: 2,
            FM: 1,
            FF: 0,     
        }  
    },
    intuition: {
        multiplier: {
            animals: 4,
            functions: 32,
            modalities: 1
        },
        functions: {
            'N Observer': 0,
            'N Decider': 1,
            'S Decider': 2,
            'S Observer': 3
        },
        modalities: {
            // BLAST MODALITY
            'Si-Ne MM': 3,
            'Si-Ne MF': 2,
            'Si-Ne FM': 1,
            'Si-Ne FF': 0,
            'Se-Ni FF': 3,
            'Se-Ni FM': 2,
            'Se-Ni MF': 1,
            'Se-Ni MM': 0,
        },
        animals: {
            'Si-Ne BS/P(C)': 7,
            'Si-Ne SB/P(C)': 6,
            'Si-Ne BS/C(P)': 5,
            'Si-Ne SB/C(P)': 4,
            'Si-Ne BP/S(C)': 3,
            'Si-Ne SC/B(P)': 2,
            'Si-Ne BP/C(S)': 1,
            'Si-Ne SC/P(B)': 0,
            'Si-Ne PB/S(C)': 7,
            'Si-Ne CS/B(P)': 6,
            'Si-Ne PB/C(S)': 5,
            'Si-Ne CS/P(B)': 4,
            'Si-Ne PC/B(S)': 3,
            'Si-Ne CP/B(S)': 2,
            'Si-Ne PC/S(B)': 1,
            'Si-Ne CP/S(B)': 0,
            'Se-Ni CP/S(B)': 7,
            'Se-Ni PC/S(B)': 6,
            'Se-Ni CP/B(S)': 5,
            'Se-Ni PC/B(S)': 4,
            'Se-Ni CS/P(B)': 3,
            'Se-Ni PB/C(S)': 2,
            'Se-Ni CS/B(P)': 1,
            'Se-Ni PB/S(C)': 0,
            'Se-Ni SC/P(B)': 7,
            'Se-Ni BP/C(S)': 6,
            'Se-Ni SC/B(P)': 5,
            'Se-Ni BP/S(C)': 4,
            'Se-Ni SB/C(P)': 3,
            'Se-Ni BS/C(P)': 2,
            'Se-Ni SB/P(C)': 1,
            'Se-Ni BS/P(C)': 0,
        }
    },
    thinking: {
        multiplier: {
            animals: 4,
            functions: 32,
            modalities: 1
        },
        functions: {
            'T Observer': 1,
            'T Decider': 0,
            'F Observer': 2,
            'F Decider': 3
        },
        modalities: {
            // PLAY MODALITY
            'Fi-Te MM': 0,
            'Fi-Te FM': 1,
            'Fi-Te MF': 2,
            'Fi-Te FF': 3,
            'Fe-Ti MM': 3,
            'Fe-Ti FM': 2,
            'Fe-Ti MF': 1,
            'Fe-Ti FF': 0,
        },
        animals: {
            'Fi-Te SC/B(P)': 7,
            'Fi-Te CS/B(P)': 6,
            'Fi-Te SC/P(B)': 5,
            'Fi-Te CS/P(B)': 4,
            'Fi-Te SB/C(P)': 3,
            'Fi-Te CP/S(B)': 2,
            'Fi-Te SB/P(C)': 1,
            'Fi-Te CP/B(S)': 0,
            'Fi-Te BS/C(P)': 7,
            'Fi-Te PC/S(B)': 6,
            'Fi-Te BS/P(C)': 5,
            'Fi-Te BP/S(C)': 4,
            'Fi-Te PC/B(S)': 3,
            'Fi-Te PB/S(C)': 2,
            'Fi-Te BP/C(S)': 1,
            'Fi-Te PB/C(S)': 0,
            'Fe-Ti SC/B(P)': 0,
            'Fe-Ti CS/B(P)': 1,
            'Fe-Ti SC/P(B)': 2,
            'Fe-Ti CS/P(B)': 3,
            'Fe-Ti SB/C(P)': 4,
            'Fe-Ti CP/S(B)': 5,
            'Fe-Ti SB/P(C)': 6,
            'Fe-Ti CP/B(S)': 7,
            'Fe-Ti BS/C(P)': 0,
            'Fe-Ti PC/S(B)': 1,
            'Fe-Ti BS/P(C)': 2,
            'Fe-Ti BP/S(C)': 3,
            'Fe-Ti PC/B(S)': 4,
            'Fe-Ti PB/S(C)': 5,
            'Fe-Ti BP/C(S)': 6,
            'Fe-Ti PB/C(S)': 7,
        } 
    },
    masculinity: {
        multiplier: {
            modalities: 128,
            masculineAnimalActivation: 1,
            saviorMasculinity: 8
        },
        modalities: {
            'MM': 0,
            'MF': 1,
            'FM': 2,
            'FF': 3
        },
        masculineAnimalActivation: {
            'Consume CP (B)': 0,
            'Consume CS (B)': 1,
            'Consume CP (S)': 2,
            'Consume BP (S)': 3,
            'Consume CS (P)': 4,
            'Consume BS (P)': 5,
            'Consume BP (C)': 6,
            'Consume BS (C)': 7,
            'Blast BS (C)': 0,
            'Blast BP (C)': 1,
            'Blast BS (P)': 2,
            'Blast CS (P)': 3,
            'Blast BP (S)': 4,
            'Blast CP (S)': 5,
            'Blast CS (B)': 6,
            'Blast CP (B)': 7,
            'Play BP (S)': 0,
            'Play CP (S)': 1,
            'Play BP (C)': 2,
            'Play BS (C)': 3,
            'Play CP (B)': 4,
            'Play CS (B)': 5,
            'Play BS (P)': 6,
            'Play CS (P)': 7,
            'Sleep CS (P)': 0,
            'Sleep BS (P)': 1,
            'Sleep CS (B)': 2,
            'Sleep CP (B)': 3,
            'Sleep BS (C)': 4,
            'Sleep BP (C)': 5,
            'Sleep CP (S)': 6,
            'Sleep BP (S)': 7,
        },
        saviorMasculinity: {
            'MM mTmS': 0, // Te Sx MM
            'MM mSmT': 1, // Sx Te MM
            'MM mSmF': 2, // Sx Fe MM
            'MM mFmS': 3, // Fe Sx MM
            'MM mTfN': 4, // Te Nx MF
            'MM mFfN': 5, // Fe Nx MF
            'MM mSfT': 6, // Sx Ti MF
            'MM mSfF': 7, // Sx Fi MF
            'MM fNmT': 8, // Nx Te FM
            'MM fNmF': 9, // Nx Fe FM
            'MM fTmS': 10, // Ti Sx FM
            'MM fFmS': 11, // Fi Sx FM
            'MM fNfT': 12, // Nx Ti FF
            'MM fNfF': 13, // Nx Fi FF
            'MM fTfN': 14, // Ti Nx FF
            'MM fFfN': 15, // Fi Nx FF

            'MF mSmT': 0, // Sx Ti MM
            'MF mTmS': 1, // Ti Sx MM
            'MF mSmF': 2, // Sx Fi MM
            'MF mFmS': 3, // Fi Sx MM
            'MF mSfT': 4, // Sx Te MF
            'MF mSfF': 5, // Sx Fe MF
            'MF fTmS': 6, // Te Sx FM
            'MF fFmS': 7, // Fe Sx FM
            'MF mTfN': 8, // Ti Nx MF
            'MF mFfN': 9, // Fi Nx MF
            'MF fNmT': 10, // Nx Ti FM
            'MF fNmF': 11, // Nx Fi FM
            'MF fTfN': 12, // Te Nx FF
            'MF fNfT': 13, // Nx Te FF
            'MF fNfF': 14, // Nx Fe FF
            'MF fFfN': 15, // Fe Nx FF

            'FM mTmN': 0, // Te Nx MM
            'FM mNmT': 1, // Nx Te MM
            'FM mFmN': 2, // Fe Nx MM
            'FM mNmF': 3, // Nx Fe MM
            'FM mTfS': 4, // Te Sx MF
            'FM mFfS': 5, // Fe Sx MF
            'FM fSmT': 6, // Sx Te FM
            'FM fSmF': 7, // Sx Fe FM
            'FM fTmN': 8, // Ti Nx FM
            'FM fFmN': 9, // Fi Nx FM
            'FM mNfT': 10, // Nx Ti MF
            'FM mNfF': 11, // Nx Fi MF
            'FM fTfS': 12, // Ti Sx FF
            'FM fSfT': 13, // Sx Ti FF
            'FM fSfF': 14, // Sx Fi FF
            'FM fFfS': 15, // Fi Sx FF

            'FF mNmT': 0, // Nx Ti MM
            'FF mTmN': 1, // Ti Nx MM
            'FF mNmF': 2, // Nx Fi MM
            'FF mFmN': 3, // Fi Nx MM
            'FF mNfT': 4, // Nx Te MF
            'FF mNfF': 5, // Nx Fe MF
            'FF fTmN': 6, // Te Nx FM
            'FF fFmN': 7, // Fe Nx FM
            'FF mTfS': 8, // Ti Sx MF
            'FF mFfS': 9, // Fi Sx MF
            'FF fSmT': 10, // Sx Ti FM
            'FF fSmF': 11, // Sx Fi FM
            'FF fTfS': 12, // Te Sx FF
            'FF fSfT': 13, // Sx Te FF
            'FF fSfF': 14, // Sx Fe FF
            'FF fFfS': 15, // Fe Sx FF
        },
    }
}

export const getCoin = (coin, type) => {
    const coins = { intuition: intuitionAnalytics(type), extroversion: extroversionAnalytics(type), openness: gatherAnalytics(type), thinking: thinkingAnalytics(type), masculinity: masculinityAnalytics(type) };
    return coins[coin];
}

export const testForEveryType = (coin) => {
    const typeDict = {};
    everyType.forEach(type => {
        const result = getCoin(coin, type);
        typeDict[type] = result.rank[0];
    });
    const sortedTypes = Object.entries(typeDict).sort((a, b) => a[1] - b[1]);
    const uniqueTypes = new Set(sortedTypes.map(type => type[1]));
    console.log(uniqueTypes.size);
    return sortedTypes;
}

const getBasics = (type) => {

    const checkExists = (string) => {
        if (string.includes('x')) {
            return null;
        }
        return string;
    }
    
    const type_split = type.split(' ');
    const modalities = checkExists(type_split[0]);
    const functions = checkExists(type_split[1]);
    const animals = checkExists(type_split[2]);

    return { modalities, functions, animals };
}

const getResults = (coin, allParts, factor = 512, rankShrink = 1) => {
    const allCoinKeys = Object.keys(values[coin]);
    var high_ranking = 1;
    var low_ranking = 1;
    allCoinKeys.forEach(key => {
        const coinValue = values[coin];
        if (coinValue) {
            const partValue = allParts[key] ? (coinValue[key]?.hasOwnProperty(allParts[key]) ? coinValue[key][allParts[key]] : 0) : (coinValue[key] ? Math.max(...Object.values(coinValue[key])) : 0);
            const multiplier = coinValue['multiplier']?.hasOwnProperty(key) ? coinValue['multiplier'][key] : 0;
    
            low_ranking += partValue * multiplier;
            
            if (!allParts[key]) {
                const lowestValue = coinValue[key] ? Math.min(...Object.values(coinValue[key])) : 0;
                high_ranking += lowestValue * multiplier;
            } else {
                high_ranking += partValue * multiplier;
            }
        }
    })
    high_ranking = Math.trunc(high_ranking*rankShrink);
    low_ranking = Math.trunc(low_ranking*rankShrink);
    var high_percentage = 100 - (( high_ranking / (factor)) * 100);
    var low_percentage = 100 - (( low_ranking / (factor)) * 100);
    high_percentage = Math.round((high_percentage + Number.EPSILON) * 10) / 10;
    low_percentage = Math.round((low_percentage + Number.EPSILON) * 10) / 10;
    if (high_ranking === low_ranking) {
        return { rank: [high_ranking], value: [high_percentage] };
    } else {
        return { rank: [low_ranking, high_ranking], value: [low_percentage, high_percentage] };
    }
}

export function extroversionAnalytics(type = 'xx xx/xx xx/x(x)', invert = false) {
    const { modalities, functions, animals } = getBasics(type);
    const letters = functions ? functions[0] + functions[3] : null;
    return getResults('extroversion', { modalities, functions: letters, animals });
}

export function gatherAnalytics(type = 'xx xx/xx xx/x(x)', invert = false) {
    const { modalities, animals, functions } = getBasics(type);
    const typeData = getTypeData(type);
    const blastModality = modalities ? typeData.blastModality : null;
    const letters = functions ? (
        typeData.observerAxis === 'Si-Ne' ? (
            typeData.deciderAxis === 'Fi-Te' ? 'NF' : 'NT'
        ) : (
            typeData.deciderAxis === 'Fi-Te' ? 'SF' : 'ST'
        )
    ) : null;
    return getResults('gather', { modalities: blastModality, animals, letters: typeData.oD ? `${typeData.oD} ${letters}` : null }, 512);
}

export function intuitionAnalytics(type = 'xx xx/xx xx/x(x)', invert = false){
    const { modalities, functions, animals } = getBasics(type);
    const typeData = getTypeData(type);
    const observerLetters = functions ? `${typeData.observerLetter} ${typeData.oD}` : null;
    const modality = (functions && modalities) ? `${typeData.observerAxis} ${typeData.blastModality}` : null;
    const axisAndAnimal = (functions && animals) ? `${typeData.observerAxis} ${animals}` : null;
    return getResults('intuition', { modalities: modality, animals: axisAndAnimal, functions: observerLetters }, 128);
}

export function thinkingAnalytics(type = 'xx xx/xx xx/x(x)', invert = false) {
    const { modalities, functions, animals } = getBasics(type);
    const typeData = getTypeData(type);
    const deciderLetters = functions ? `${typeData.deciderLetter} ${typeData.oD}` : null;
    const modality = (functions && modalities) ? `${typeData.deciderAxis} ${typeData.playModality}` : null;
    const axisAndAnimal = (functions && animals) ? `${typeData.deciderAxis} ${animals}` : null;
    return getResults('thinking', { modalities: modality, animals: axisAndAnimal, functions: deciderLetters }, 128);
}

export function masculinityAnalytics(type = 'xx xx/xx xx/x(x)', invert = false) {

    const lastAnimalActivation = {
        'Blast': ['Ne', 'Se', 'Fi', 'Ti'],
        'Play': ['Ni', 'Si', 'Fi', 'Ti'],
        'Consume': ['Ni', 'Si', 'Fe', 'Te'],
        'Sleep': ['Ne', 'Se', 'Fe', 'Te']
    }

    const { modalities, functions, animals } = getBasics(type);
    const typeData = getTypeData(type);

    const observerMasculine = (func) => typeData.sensoryModality === 'mS' ? (
        func.includes('N') ? 'F' : 'M'
    ) : (
        func.includes('N') ? 'M' : 'F'
    )

    const deciderMasculine = (func) => typeData.deModality === 'mDe' ? (
        func.includes('e') ? 'M' : 'F'
    ) : (
        func.includes('e') ? 'F' : 'M'
    )

    const getMasculineAnimal = () => {
        const animals = Object.keys(lastAnimalActivation);
        for (var i = 0; i < animals.length; i++) {
            const animal = animals[i];
            if (typeData[animal.toLowerCase() + "Modality"] === 'MM') {
                return animal;
            }
        }
    }

    const getSaviorAnim = (type) => {
        const saviors = [typeData.animal1, typeData.animal2];
        if (type === 'Energy') {
            if (saviors.includes('Play')) {
                return 'P'
            } else {
                return 'S'
            }
        } else {
            if (saviors.includes('Consume')) {
                return 'C'
            } else {
                return 'B'
            }
        }
    }

    const saviorMasculinity = (modalities && functions) ? typeData.oD === 'Decider' ? (
        `${modalities} ${deciderMasculine(typeData.function1).toLowerCase()}${typeData.deciderLetter}${observerMasculine(typeData.function2).toLowerCase()}${typeData.observerLetter}`
    ) : (
        `${modalities} ${observerMasculine(typeData.function1).toLowerCase()}${typeData.observerLetter}${deciderMasculine(typeData.function2).toLowerCase()}${typeData.deciderLetter}`
    ) : null;

    const masculineAnimalActivation = (modalities && animals) ? `${getMasculineAnimal()} ${getSaviorAnim('Info')}${getSaviorAnim('Energy')} (${typeData.animal4.substring(0,1)})` : null;

    return getResults('masculinity', { modalities, saviorMasculinity, masculineAnimalActivation });
}