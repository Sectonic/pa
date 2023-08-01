"use client";

import { changeAnimals, combineToFunctions } from "@lib/getTypeData";
import { useEffect } from "react";

String.prototype.replaceCharacterAtIndex = function(index, newCharacter) {
    if (index < 0 || index >= this.length) {
      return this.toString();
    }
    const finalString = this.substring(0, index) + newCharacter + this.substring(index + newCharacter.length);
    return finalString;
};

export const Coin = ({ keys, value, coin, typeData }) => {

    const animalType = {
        'Consume': 'Info',
        'Blast': 'Info',
        'Sleep': 'Energy',
        'Play': 'Energy'
    }

    const animNeeds = {
        'Blast': ['Oi', 'De'],
        'Play': ['Oe', 'De'],
        'Consume': ['Oe', 'Di'],
        'Sleep': ['Oi', 'Di']
    }

    const getEnergySavior = () => {
        const saviorAnims = [typeData.animal1, typeData.animal2];
        if (saviorAnims.includes('Play')) {
            return 'Play';
        } else if (saviorAnims.includes('Slee')) {
            return 'Sleep'
        } else {
            return null;
        }
    }
    
    const getInfoSavior = () => {
        const saviorAnims = [typeData.animal1, typeData.animal2];
        if (saviorAnims.includes('Consume')) {
            return 'Consume';
        } else if (saviorAnims.includes('Blast')) {
            return 'Blast'
        } else {
            return null;
        }
    }

    const coinChanger = {
        oD: (value, type = typeData.type) => {
            // xx xx/xx xx/x(x)
            // 0123456789012345
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
            type = type.replaceCharacterAtIndex(startingPoint, combineToFunctions(value === 'x' ? null : value, typeData['deciderLetter'] , 'Decider'));
            return type;  
        },
        observerNeed: (value, type = typeData.type) => {
            const startingPoint = typeData.oD === 'Observer' ? 3 : 6;
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
            if (animalType[typeData.animal1] === 'Info' && value != typeData.animal1) {
                animal1 = value;
                const needs = animNeeds[value];
                type = coinChanger.observerNeed(needs[0]);
                type = coinChanger.deciderNeed(needs[1], type);
            }

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

            if (animalType[typeData.animal1] === 'Energy' && value != typeData.animal1) {
                animal1 = value;
                const needs = animNeeds[value];
                type = coinChanger.observerNeed(needs[0]);
                type = coinChanger.deciderNeed(needs[1], type);
            }

            const animals = changeAnimals(animal1, value, getInfoSavior(), typeData.energyInfo);
            type = type.replaceCharacterAtIndex(9, animals);
            return type;
        },


    }

    useEffect(() => {
        console.log(coinChanger.infoAnimal('x'));
    }, [])

    const imagesObj = {
        Observer: '/img/icons/partial/needs/o.png',
        Decider: '/img/icons/partial/needs/d.png',
        Di: '/img/icons/Needs/di.png',
        De: '/img/icons/Needs/de.png',
        Oi: '/img/icons/Needs/oi.png',
        Oe: '/img/icons/Needs/oe.png',
        F: '/img/icons/Letters/f.png',
        T: '/img/icons/Letters/t.png',
        N: '/img/icons/Letters/n.png',
        S: '/img/icons/Letters/s.png',
        Sleep: '/img/icons/Needs/oidi.png',
        Play: '/img/icons/Needs/oede.png',
        Blast: '/img/icons/Needs/oide.png',
        Consume: '/img/icons/Needs/oedi.png',
        Info: '/img/learn/ops/basic/animals/energy.png',
        Energy: '/img/learn/ops/basic/animals/light.png',
        fS: '/img/icons/Modalities/Fem/f_s.png',
        mS: '/img/icons/Modalities/Masc/m_s.png',
        fDe: '/img/icons/Modalities/Fem/f_de.png',
        mDe: '/img/icons/Modalities/Masc/m_de.png'
    }

    const changeCoin = (e) => {

        if (e.target.className.includes('typechart_coin-intermediate')) {
            
        }



    }

    return (
        <div className="typechart_coin_container">
            {keys.map(key, i => {
                const saviorDemon = value === key ? 'savior' : 'demon';
                return (
                    <div className={`typechart_coin-${saviorDemon}`} key={i}>
                        {key}
                    </div>
                )
            })}
        </div>
    )
}