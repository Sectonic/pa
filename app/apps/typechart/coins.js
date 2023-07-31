
export const CoinContainer = ({ keys, value }) => {

    if (!value) {
        return <></>;
    }

    return (
        <div className="typechart_coin_container">
            {keys.mapW(key, i => {
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