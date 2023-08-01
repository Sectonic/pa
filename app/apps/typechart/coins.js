"use client";

import { changeAnimals, combineToFunctions } from "@lib/getTypeData";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

String.prototype.replaceCharacterAtIndex = function(index, newCharacter) {
    if (index < 0 || index >= this.length) {
      return this.toString();
    }
    const finalString = this.substring(0, index) + newCharacter + this.substring(index + newCharacter.length);
    return finalString;
};

export const Coin = ({ keys, value, coin, typeData }) => {
    const router = useRouter();

    const animalType = {
        'Consume': 'Info',
        'Blast': 'Info',
        'Sleep': 'Energy',
        'Play': 'Energy'
    }

    const oppositeAnimals = {
        'Blast': 'Consume',
        'Play': 'Sleep',
        'Consume': 'Blast',
        'Sleep': 'Play'
    }

    const animNeeds = {
        'Blast': ['Oi', 'De'],
        'Play': ['Oe', 'De'],
        'Consume': ['Oe', 'Di'],
        'Sleep': ['Oi', 'Di']
    }

    const saviorAnims = [typeData.animal1, typeData.animal2];
    const demonAnims = [typeData.animal3, typeData.animal4];

    const getAnimalByNeed = (needs) => Object.keys(animNeeds).find(key => animNeeds[key].every((v, i) => v === needs[i])) || null;

    const getEnergySavior = () => {
        if (saviorAnims.includes('Play')) {
            return 'Play';
        } else if (saviorAnims.includes('Sleep')) {
            return 'Sleep'
        } else if (demonAnims.includes('Play')) {
            return 'Sleep';
        } else if (demonAnims.includes('Sleep')) {
            return 'Play';
        } else {
            return null;
        }
    }
    
    const getInfoSavior = () => {
        if (saviorAnims.includes('Consume')) {
            return 'Consume';
        } else if (saviorAnims.includes('Blast')) {
            return 'Blast'
        } else if (demonAnims.includes('Consume')) {
            return 'Blast';
        } else if (demonAnims.includes('Blast')) {
            return 'Consume';
        } else {
            return null;
        }
    }

    const coinChanger = {
        oD: (value, type = typeData.type) => {
            if (value === 'x') {
                const funcs = type.substring(3,8);
                type = type.replace(funcs, 'xx/xx');
            } else {
                const currentCoin = value.toLowerCase();
                const oppositeCoin = value === 'Decider' ? 'observer' : 'decider';
                type = type.replaceCharacterAtIndex(3, combineToFunctions(typeData[currentCoin + 'Need'], typeData[currentCoin + 'Letter'], currentCoin));
                type = type.replaceCharacterAtIndex(6, combineToFunctions(typeData[oppositeCoin + 'Need'], typeData[oppositeCoin + 'Letter'], oppositeCoin));
            }
            return type;
        },
        deciderLetter: (value, type = typeData.type) => {
            const startingPoint = typeData.oD === 'Decider' ? 3 : 6;
            type = type.replaceCharacterAtIndex(startingPoint, combineToFunctions(typeData['deciderNeed'], value === 'x' ? null : value , 'Decider'));
            return type;
        },
        observerLetter: (value, type = typeData.type) => {
            const startingPoint = typeData.oD === 'Observer' ? 3 : 6;
            type = type.replaceCharacterAtIndex(startingPoint, combineToFunctions(typeData['observerNeed'], value === 'x' ? null : value , 'Observer'));
            return type;
        },
        deciderNeed: (value, type = typeData.type) => {
            const startingPoint = typeData.oD === 'Decider' ? 3 : 6;
            if (typeData.observerNeed && value != 'x') {
                const animalFromNeeds = getAnimalByNeed([typeData.observerNeed, value]);
                const animals = animalType[animalFromNeeds] === 'Energy' ? changeAnimals(animalFromNeeds, animalFromNeeds, getInfoSavior(), typeData.energyInfo) : changeAnimals(animalFromNeeds, getEnergySavior(), animalFromNeeds, typeData.energyInfo);
                type = type.replaceCharacterAtIndex(9, animals);
            }
            type = type.replaceCharacterAtIndex(startingPoint, combineToFunctions(value === 'x' ? null : value, typeData['deciderLetter'] , 'Decider'));
            return type;  
        },
        observerNeed: (value, type = typeData.type) => {
            const startingPoint = typeData.oD === 'Observer' ? 3 : 6;
            if (typeData.deciderNeed && value != 'x') {
                const animalFromNeeds = getAnimalByNeed([value, typeData.deciderNeed]);
                const animals = animalType[animalFromNeeds] === 'Energy' ? changeAnimals(animalFromNeeds, animalFromNeeds, getInfoSavior(), typeData.energyInfo) : changeAnimals(animalFromNeeds, getEnergySavior(), animalFromNeeds, typeData.energyInfo);
                type = type.replaceCharacterAtIndex(9, animals);
            }
            type = type.replaceCharacterAtIndex(startingPoint, combineToFunctions(value === 'x' ? null : value, typeData['observerLetter'] , 'Observer'));
            return type;      
        },
        sensoryModality: (value, type = typeData.type) => {
            const letter = value[0].toUpperCase();
            return type.replaceCharacterAtIndex(0, letter);
        },
        deModality: (value, type = typeData.type) => {
            const letter = value[0].toUpperCase();
            return type.replaceCharacterAtIndex(1, letter);
        },
        infoAnimal: (value, type = typeData.type) => {

            if (value === 'x') {
                const animals = type.substring(9).replaceAll('B', 'x').replaceAll('C', 'x');
                return type.replaceCharacterAtIndex(9, animals);
            }

            var animal1 = typeData.animal1;

            if (!animal1 && typeData.deciderNeed && typeData.observerNeed) {
                const newNeeds = [typeData.observerNeed, typeData.deciderNeed];
                const animalFromNeeds = Object.keys(animNeeds).find(key => animNeeds[key].every((v, i) => v === newNeeds[i])) || null;
                animal1 = animalFromNeeds; 
            }

            if ((animal1 && animalType[animal1] === 'Info' && value !== animal1) || (typeData.animal2 && animalType[typeData.animal2] === 'Energy')) {
                animal1 = value;
                const needs = animNeeds[value];
                type = coinChanger.observerNeed(needs[0]);
                type = coinChanger.deciderNeed(needs[1], type);
            }

            if (!animal1) return type;

            const animals = changeAnimals(animal1, getEnergySavior(), value, typeData.energyInfo);
            type = type.replaceCharacterAtIndex(9, animals);
            return type;
        },
        energyAnimal: (value, type = typeData.type) => {

            var animal1 = typeData.animal1;

            if (value === 'x') {
                const animals = type.substring(9).replaceAll('P', 'x').replaceAll('S', 'x');
                return type.replaceCharacterAtIndex(9, animals);
            }

            var animal1 = typeData.animal1;

            if (!animal1 && typeData.deciderNeed && typeData.observerNeed) {
                const newNeeds = [typeData.observerNeed, typeData.deciderNeed];
                const animalFromNeeds = getAnimalByNeed(newNeeds);
                animal1 = animalFromNeeds; 
            }

            if ((animal1 && animalType[animal1] === 'Energy' && value !== animal1) || (typeData.animal2 && animalType[typeData.animal2] === 'Info')) {
                animal1 = value;
                const needs = animNeeds[value];
                type = coinChanger.observerNeed(needs[0]);
                type = coinChanger.deciderNeed(needs[1], type);
            }

            if (!animal1) return type;

            const animals = changeAnimals(animal1, value, getInfoSavior(), typeData.energyInfo);
            type = type.replaceCharacterAtIndex(9, animals);
            return type;

        },
        energyInfo: (value, type = typeData.type ) => {
            if (value === 'x') {
                return type.replaceCharacterAtIndex(12, 'x(x)');
            }
            const energyAnim = oppositeAnimals[getEnergySavior()];
            const infoAnim = oppositeAnimals[getInfoSavior()];
            return type.replaceCharacterAtIndex(12, `${value === 'Energy' ? energyAnim[0] : infoAnim[0]}(${value === 'Energy' ? infoAnim[0] : energyAnim[0]})`);
        },
    }

    const imagesObj = {
        Observer: '/img/typechart/observer.png',
        Decider: '/img/typechart/decider.png',
        Di: '/img/typechart/di.png',
        De: '/img/typechart/de.png',
        Oi: '/img/typechart/oi.png',
        Oe: '/img/typechart/oe.png',
        F: '/img/typechart/f.png',
        T: '/img/typechart/t.png',
        N: '/img/typechart/n.png',
        S: '/img/typechart/s.png',
        Sleep: '/img/typechart/sleep.png',
        Play: '/img/typechart/play.png',
        Blast: '/img/typechart/blast.png',
        Consume: '/img/typechart/consume.png',
        Info: '/img/typechart/info.png',
        Energy: '/img/typechart/energy.png',
        fS: '/img/typechart/fsens.png',
        mS: '/img/typechart/msens.png',
        fDe: '/img/typechart/fde.png',
        mDe: '/img/typechart/mde.png'
    }

    const changeCoin = (e) => {
        const changedType = coinChanger[coin](e.target.innerHTML);
        router.push('/apps/typechart?' + new URLSearchParams({type: changedType}) + '#container');
    }

    return (
        <div className="typechart_coin_container">
            <div className={`typechart_coin-${value === keys[0] ? 'savior' : 'demon'}`}>
                <img src={imagesObj[keys[0]]}/>
                <div className="typechart_coin-btn" onClick={value === keys[0] ? null : changeCoin}>{keys[0]}</div>
            </div>
            <div className={`typechart_coin-intermediate ${!keys.includes(value) ? 'typechart_coin-none' : ''}`} onClick={!keys.includes(value) ? null : changeCoin}>
                x
            </div>
            <div className={`typechart_coin-${value === keys[1] ? 'savior' : 'demon'}`}>
                <img src={imagesObj[keys[1]]}/>
                <div className="typechart_coin-btn" onClick={value === keys[1] ? null : changeCoin}>{keys[1]}</div>
            </div>
        </div>
    )
}