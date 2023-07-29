import { Children, cloneElement } from "react"

export const CoinContainer = ({ children, typeData }) => {

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

    const sortSaviorAnimals = (searchingAnimal) => {

        if (searchingAnimal === 'infoAnimal') {
            return getInfoSavior()
        } else {
            return getEnergySavior()
        }

    }

    return (
        <div className="typechart_coins">
            {Children.map(children, (child) => {
                return cloneElement(child, { typeData, value: ['infoAnimal', 'energyAnimal'].includes(child.props.coin) ? sortSaviorAnimals(child.props.coin) : typeData[child.props.coin] })
            })}
        </div>
    );
}