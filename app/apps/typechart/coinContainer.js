import { Children, cloneElement } from "react"

export const CoinContainer = ({ children, typeData }) => {

    const saviorAnims = [typeData.animal1, typeData.animal2];
    const demonAnims = [typeData.animal3, typeData.animal4];

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

    const sortSaviorAnimals = (searchingAnimal) => {

        if (searchingAnimal === 'infoAnimal') {
            return getInfoSavior()
        } else {
            return getEnergySavior()
        }

    }

    return (
        <div className="typechart_coins">
            <div className="typechart_coins-center-wrapper">
                <div>
                    <div className="typechart_title_small">Coin Checklist</div>
                    <div className="typechart_subtitle_small">Click a coin to change the type.</div>
                </div>
                {Children.map(children, (child) => {
                    return cloneElement(child, { typeData, value: ['infoAnimal', 'energyAnimal'].includes(child.props.coin) ? sortSaviorAnimals(child.props.coin) : typeData[child.props.coin] })
                })}
            </div>
        </div>
    );
}