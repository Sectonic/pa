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
    introversion: {
        multiplier: {
            animals: 32,
            functions: 1,
            modalities: 8
        },
        animals: {
            'SC/B(P)': 0,
            'CS/B(P)': 1,
            'SC/P(B)': 2,
            'BS/C(P)': 3,
            'SB/C(P)': 4,
            'CS/P(B)': 5,
            'PC/S(B)': 6,
            'CP/S(B)': 7,
            'BS/P(C)': 8,
            'SB/P(C)': 9,
            'BP/S(C)': 10,
            'PC/B(S)': 11,
            'CP/B(S)': 12,
            'PB/S(C)': 13,
            'BP/C(S)': 14,
            'PB/C(S)': 15,
        },
        functions: {
            // Letters of functions
            TS: 7,
            TN: 6,
            ST: 5,
            SF: 4,
            NT: 3,
            NF: 2,
            FS: 1,
            FN: 0
        },
        modalities: {
            MM: 3,
            MF: 2,
            FM: 1,
            FF: 0
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
    organize: {
        multiplier: {
            animals: 32,
            modalities: 8,
            letters: 1
        },
        animals: {
            'BS/P(C)': 0,
            'SB/P(C)': 1,
            'BS/C(P)': 2,
            'SB/C(P)': 3,
            'BP/S(C)': 4,
            'SC/B(P)': 5,
            'PB/S(C)': 6,
            'CS/B(P)': 7,
            'BP/C(S)': 8,
            'SC/P(B)': 9,
            'PB/C(S)': 10,
            'CS/P(B)': 11,
            'PC/B(S)': 12,
            'CP/B(S)': 13,
            'PC/S(B)': 14,
            'CP/S(B)': 15,
        },
        letters: {
            // CONSUME LETTERS
            'Observer ST': 7,
            'Decider ST': 6,
            'Observer SF': 5,
            'Decider SF': 4,
            'Decider NT': 3,
            'Observer NT': 2,
            'Decider NF': 1,
            'Observer NF': 0
        },
        modalities: {
            // BLAST MODALITY
            MM: 0,
            MF: 1,
            FM: 2,
            FF: 3
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
    sensory: {
        multiplier: {
            animals: 4,
            functions: 32,
            modalities: 1
        },
        functions: {
            'N Observer': 3,
            'N Decider': 2,
            'S Decider': 1,
            'S Observer': 0
        },
        modalities: {
            // BLAST MODALITY
            'Si-Ne MM': 0,
            'Si-Ne MF': 1,
            'Si-Ne FM': 2,
            'Si-Ne FF': 3,
            'Se-Ni FF': 0,
            'Se-Ni FM': 1,
            'Se-Ni MF': 2,
            'Se-Ni MM': 3,
        },
        animals: {
            'Si-Ne BS/P(C)': 0,
            'Si-Ne SB/P(C)': 1,
            'Si-Ne BS/C(P)': 2,
            'Si-Ne SB/C(P)': 3,
            'Si-Ne BP/S(C)': 4,
            'Si-Ne SC/B(P)': 5,
            'Si-Ne BP/C(S)': 6,
            'Si-Ne SC/P(B)': 7,
            'Si-Ne PB/S(C)': 0,
            'Si-Ne CS/B(P)': 1,
            'Si-Ne PB/C(S)': 2,
            'Si-Ne CS/P(B)': 3,
            'Si-Ne PC/B(S)': 4,
            'Si-Ne CP/B(S)': 5,
            'Si-Ne PC/S(B)': 6,
            'Si-Ne CP/S(B)': 7,
            'Se-Ni CP/S(B)': 0,
            'Se-Ni PC/S(B)': 1,
            'Se-Ni CP/B(S)': 2,
            'Se-Ni PC/B(S)': 3,
            'Se-Ni CS/P(B)': 4,
            'Se-Ni PB/C(S)': 5,
            'Se-Ni CS/B(P)': 6,
            'Se-Ni PB/S(C)': 7,
            'Se-Ni SC/P(B)': 0,
            'Se-Ni BP/C(S)': 1,
            'Se-Ni SC/B(P)': 2,
            'Se-Ni BP/S(C)': 3,
            'Se-Ni SB/C(P)': 4,
            'Se-Ni BS/C(P)': 5,
            'Se-Ni SB/P(C)': 6,
            'Se-Ni BS/P(C)': 7,
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
    feeling: {
        multiplier: {
            animals: 4,
            functions: 32,
            modalities: 1
        },
        functions: {
            'T Observer': 2,
            'T Decider': 3,
            'F Observer': 1,
            'F Decider': 0
        },
        modalities: {
            // PLAY MODALITY
            'Fi-Te MM': 3,
            'Fi-Te FM': 2,
            'Fi-Te MF': 1,
            'Fi-Te FF': 0,
            'Fe-Ti MM': 0,
            'Fe-Ti FM': 1,
            'Fe-Ti MF': 2,
            'Fe-Ti FF': 3,
        },
        animals: {
            'Fi-Te SC/B(P)': 0,
            'Fi-Te CS/B(P)': 1,
            'Fi-Te SC/P(B)': 2,
            'Fi-Te CS/P(B)': 3,
            'Fi-Te SB/C(P)': 4,
            'Fi-Te CP/S(B)': 5,
            'Fi-Te SB/P(C)': 6,
            'Fi-Te CP/B(S)': 7,
            'Fi-Te BS/C(P)': 0,
            'Fi-Te PC/S(B)': 1,
            'Fi-Te BS/P(C)': 2,
            'Fi-Te BP/S(C)': 3,
            'Fi-Te PC/B(S)': 4,
            'Fi-Te PB/S(C)': 5,
            'Fi-Te BP/C(S)': 6,
            'Fi-Te PB/C(S)': 7,
            'Fe-Ti SC/B(P)': 7,
            'Fe-Ti CS/B(P)': 6,
            'Fe-Ti SC/P(B)': 5,
            'Fe-Ti CS/P(B)': 4,
            'Fe-Ti SB/C(P)': 3,
            'Fe-Ti CP/S(B)': 2,
            'Fe-Ti SB/P(C)': 1,
            'Fe-Ti CP/B(S)': 0,
            'Fe-Ti BS/C(P)': 7,
            'Fe-Ti PC/S(B)': 6,
            'Fe-Ti BS/P(C)': 5,
            'Fe-Ti BP/S(C)': 4,
            'Fe-Ti PC/B(S)': 3,
            'Fe-Ti PB/S(C)': 2,
            'Fe-Ti BP/C(S)': 1,
            'Fe-Ti PB/C(S)': 0,
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
            'MM mTmS': 0,
            'MM mSmT': 1,
            'MM mSmF': 2,
            'MM mFmS': 3,
            'MM mTfN': 4,
            'MM mFfN': 5,
            'MM mSfT': 6,
            'MM mSfF': 7,
            'MM fNmT': 8,
            'MM fNmF': 9,
            'MM fTmS': 10,
            'MM fFmS': 11,
            'MM fNfT': 12,
            'MM fNfF': 13,
            'MM fTfN': 14,
            'MM fFfN': 15,
    
            'MF mSmT': 0,
            'MF mTmS': 1,
            'MF mSmF': 2,
            'MF mFmS': 3,
            'MF mSfT': 4,
            'MF mSfF': 5,
            'MF fTmS': 6,
            'MF fFmS': 7,
            'MF mTfN': 8,
            'MF mFfN': 9,
            'MF fNmT': 10,
            'MF fNmF': 11,
            'MF fTfN': 12,
            'MF fNfT': 13,
            'MF fNfF': 14,
            'MF fFfN': 15,
    
            'FM mTmN': 0,
            'FM mNmT': 1,
            'FM mFmN': 2,
            'FM mNmF': 3,
            'FM mTfS': 4,
            'FM mFfS': 5,
            'FM fSmT': 6,
            'FM fSmF': 7,
            'FM fTmN': 8,
            'FM fFmN': 9,
            'FM mNfT': 10,
            'FM mNfF': 11,
            'FM fTfS': 12,
            'FM fSfT': 13,
            'FM fSfF': 14,
            'FM fFfS': 15,
    
            'FF mNmT': 0,
            'FF mTmN': 1,
            'FF mNmF': 2,
            'FF mFmN': 3,
            'FF mNfT': 4,
            'FF mNfF': 5,
            'FF fTmN': 6,
            'FF fFmN': 7,
            'FF mTfS': 8,
            'FF mFfS': 9,
            'FF fSmT': 10,
            'FF fSmF': 11,
            'FF fTfS': 12,
            'FF fSfT': 13,
            'FF fSfF': 14,
            'FF fFfS': 15,
        },
    },
    femininity: {
        multiplier: {
            modalities: 128,
            masculineAnimalActivation: 1,
            saviorMasculinity: 8
        },
        modalities: {
            'MM': 3,
            'MF': 2,
            'FM': 1,
            'FF': 0
        },
        masculineAnimalActivation: {
            'Consume CP (B)': 7,
            'Consume CS (B)': 6,
            'Consume CP (S)': 5,
            'Consume BP (S)': 4,
            'Consume CS (P)': 3,
            'Consume BS (P)': 2,
            'Consume BP (C)': 1,
            'Consume BS (C)': 0,
            'Blast BS (C)': 7,
            'Blast BP (C)': 6,
            'Blast BS (P)': 5,
            'Blast CS (P)': 4,
            'Blast BP (S)': 3,
            'Blast CP (S)': 2,
            'Blast CS (B)': 1,
            'Blast CP (B)': 0,
            'Play BP (S)': 7,
            'Play CP (S)': 6,
            'Play BP (C)': 5,
            'Play BS (C)': 4,
            'Play CP (B)': 3,
            'Play CS (B)': 2,
            'Play BS (P)': 1,
            'Play CS (P)': 0,
            'Sleep CS (P)': 7,
            'Sleep BS (P)': 6,
            'Sleep CS (B)': 5,
            'Sleep CP (B)': 4,
            'Sleep BS (C)': 3,
            'Sleep BP (C)': 2,
            'Sleep CP (S)': 1,
            'Sleep BP (S)': 0,
        },
        saviorMasculinity: {
            'MM mTmS': 15,
            'MM mSmT': 14,
            'MM mSmF': 13,
            'MM mFmS': 12,
            'MM mTfN': 11,
            'MM mFfN': 10,
            'MM mSfT': 9,
            'MM mSfF': 8,
            'MM fNmT': 7,
            'MM fNmF': 6,
            'MM fTmS': 5,
            'MM fFmS': 4,
            'MM fNfT': 3,
            'MM fNfF': 2,
            'MM fTfN': 1,
            'MM fFfN': 0,
    
            'MF mSmT': 15,
            'MF mTmS': 14,
            'MF mSmF': 13,
            'MF mFmS': 12,
            'MF mSfT': 11,
            'MF mSfF': 10,
            'MF fTmS': 9,
            'MF fFmS': 8,
            'MF mTfN': 7,
            'MF mFfN': 6,
            'MF fNmT': 5,
            'MF fNmF': 4,
            'MF fTfN': 3,
            'MF fNfT': 2,
            'MF fNfF': 1,
            'MF fFfN': 0,
    
            'FM mTmN': 15,
            'FM mNmT': 14,
            'FM mFmN': 13,
            'FM mNmF': 12,
            'FM mTfS': 11,
            'FM mFfS': 10,
            'FM fSmT': 9,
            'FM fSmF': 8,
            'FM fTmN': 7,
            'FM fFmN': 6,
            'FM mNfT': 5,
            'FM mNfF': 4,
            'FM fTfS': 3,
            'FM fSfT': 2,
            'FM fSfF': 1,
            'FM fFfS': 0,
    
            'FF mNmT': 15,
            'FF mTmN': 14,
            'FF mNmF': 13,
            'FF mFmN': 12,
            'FF mNfT': 11,
            'FF mNfF': 10,
            'FF fTmN': 9,
            'FF fFmN': 8,
            'FF mTfS': 7,
            'FF mFfS': 6,
            'FF fSmT': 5,
            'FF fSmF': 4,
            'FF fTfS': 3,
            'FF fSfT': 2,
            'FF fSfF': 1,
            'FF fFfS': 0,
        },
    },
    // observer: {
    //     multiplier: {
    //         observerDecider: 256,
    //         animals: 32,
    //         modalities: 8
    //     },
    //     observerDecider: {
    //         Observer: 0,
    //         Decider: 1
    //     },
    //     animals: {
    //         BSPC: 0,
    //         CPSB: 0,
    //         SBPC: 1,
    //         PCSB: 1,
    //         BPSC: 2,
    //         CSPB: 2,
    //         BSCP: 3,
    //         CPBS: 3,
    //         SBCP: 4,
    //         PCBS: 4,
    //         PBSC: 5,
    //         SCPB: 5,
    //         BPCS: 6,
    //         CSBP: 6,
    //         PBCS: 7,
    //         SCBP: 7,
    //     },
    //     modalities: {
    //         'MM Blast': 0,
    //         'MM Consume': 0,
    //         'MF Blast': 1,
    //         'MF Consume': 1,
    //         'FM Blast': 2,
    //         'FM Consume': 2,
    //         'FF Blast': 3,
    //         'FF Consume': 3
    //     }
    // }
}


const getBasics = (type) => {
    const checkExists = (string) => (string.includes('x') ? null : string);
    const [modalities, functions, animals] = type.split(' ').map(checkExists);
    return { modalities, functions, animals };
};

export const getCoin = (coin, type) => {
    const analyzers = {
        intuition: intuitionAnalytics(type),
        sensory: intuitionAnalytics(type, true),
        extroversion: extroversionAnalytics(type),
        introversion: extroversionAnalytics(type, true),
        gather: gatherAnalytics(type),
        organize: gatherAnalytics(type, true),
        thinking: thinkingAnalytics(type),
        feeling: thinkingAnalytics(type, true),
        masculinity: masculinityAnalytics(type),
        femininity: masculinityAnalytics(type, true)
    };
    return analyzers[coin];
};

export const testForEveryType = (coin) => {
    const typeDict = {};
    everyType.forEach((type) => {
        const result = getCoin(coin, type);
        typeDict[type] = result.rank[0];
    });
    const sortedTypes = Object.entries(typeDict).sort((a, b) => a[1] - b[1]);
    // const uniqueTypes = new Set(sortedTypes.map((type) => type[1]));
    return sortedTypes;
};

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
        return { rank: [high_ranking], value: [high_ranking === 1 ? 100 : high_percentage], amount: factor };
    } else {
        return { rank: [low_ranking, high_ranking], value: [low_percentage, high_percentage], amount: factor };
    }
}

export function extroversionAnalytics(type = 'xx xx/xx xx/x(x)', invert = false) {
    const { modalities, functions, animals } = getBasics(type);
    const letters = functions ? functions[0] + functions[3] : null;
    const result = getResults(invert ? 'introversion' : 'extroversion', { modalities, functions: letters, animals });
    return result;
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
    const result = getResults(invert ? 'organize' : 'gather', { modalities: blastModality, animals, letters: typeData.oD ? `${typeData.oD} ${letters}` : null }, 512);
    return result;
}

export function intuitionAnalytics(type = 'xx xx/xx xx/x(x)', invert = false){
    const { modalities, functions, animals } = getBasics(type);
    const typeData = getTypeData(type);
    const observerLetters = functions ? `${typeData.observerLetter} ${typeData.oD}` : null;
    const modality = (functions && modalities) ? `${typeData.observerAxis} ${typeData.blastModality}` : null;
    const axisAndAnimal = (functions && animals) ? `${typeData.observerAxis} ${animals}` : null;
    const result = getResults(invert ? 'sensory' : 'intuition', { modalities: modality, animals: axisAndAnimal, functions: observerLetters }, 128);
    return result;
}

export function thinkingAnalytics(type = 'xx xx/xx xx/x(x)', invert = false) {
    const { modalities, functions, animals } = getBasics(type);
    const typeData = getTypeData(type);
    const deciderLetters = functions ? `${typeData.deciderLetter} ${typeData.oD}` : null;
    const modality = (functions && modalities) ? `${typeData.deciderAxis} ${typeData.playModality}` : null;
    const axisAndAnimal = (functions && animals) ? `${typeData.deciderAxis} ${animals}` : null;
    const result = getResults(invert ? 'feeling' : 'thinking', { modalities: modality, animals: axisAndAnimal, functions: deciderLetters }, 128);
    return result;
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

    const result = getResults(invert ? 'femininity' : 'masculinity', { modalities, saviorMasculinity, masculineAnimalActivation });
    return result;
}