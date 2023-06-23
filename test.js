
const type = 'FM Fi/Ne CS/P(B)';
const social = 4;

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
const letters = functions ? functions[0] + functions[3] : null;

const animal_values = {
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
}

const letter_values = {
    TS: 0,
    TN: 1,
    ST: 2,
    SF: 3,
    NT: 4,
    NF: 5,
    FS: 6,
    FN: 7,
}

const modality_values = {
    MM: 0,
    MF: 1,
    FM: 2,
    FF: 3,
}

const social_values = {
    2: 0,
    4: 1,
    1: 2,
    3: 3,
}

const high_ranking = ((animals ? animal_values[animals] : 0) * 128) + 
                     ((letters ? letter_values[letters] : 0) * 16) + 
                     ((modalities ? modality_values[modalities] : 0) * 4) + 
                     (social ? social_values[social] : 0) + 1;

const low_ranking = ((animals ? animal_values[animals] : 15) * 128) + 
                    ((letters ? letter_values[letters] : 7) * 16) + 
                    ((modalities ? modality_values[modalities] : 3) * 4) + 
                    (social ? social_values[social] : 3) + 1;

const roundDecimal = (num) => {
    return num.toFixed(2);
}

const high_percentage = ((high_ranking / 2048) * 100);
const low_percentage = ((low_ranking / 2048) * 100);

if (high_ranking === low_ranking) {
    console.log(high_ranking + ' out of 2048');
    console.log('There are ' + roundDecimal(high_percentage) + '% more extroverted people and ' + roundDecimal(100 - high_percentage) + '% more introverted people than you');
} else {
    console.log('Between ' + high_ranking + ' to ' + low_ranking + ' out of 2048');
    console.log(`Between ${roundDecimal(high_percentage)}% to ${roundDecimal(hlow_percentage)}% are more extroverted people thank you and between ${roundDecimal(100 - high_percentage)}% to ${roundDecimal(100 - low_percentage)}% more introverted people than you`);
}

