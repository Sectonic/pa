
export const CoinContainer = ({ keys, value }) => {

    if (!value) {
        return <></>;
    }

    return (
        <div className="typechart_coin_container">
            {keys.map(key => {
                const saviorDemon = value === key ? 'savior' : 'demon';
                return (
                    <div className={`typechart_coin-${saviorDemon}`}>
                        {key}
                    </div>
                )
            })}
        </div>
    )
}