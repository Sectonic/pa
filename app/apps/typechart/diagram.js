
export const Diagram = ({ name, src, value, rank, colors }) => {

    const graphArr = [10, 20, 30, 40, 50, 50, 40, 30, 20, 10];

    return (
        <div className="typechart_diagram">
            <div className="typechart_diagram-title">
                <img src={src} />
                {name}
            </div>
            <div className="typechart_diagram-value">{value}%</div>
            <div className="typechart_diagram-desc">Ranked <strong>{rank}th out of 2048</strong> for most extroverted</div>
            <div className="typechart_diagram-graph">
                {graphArr.map((bar, i) => {
                    const currentLower = i * 10;
                    const currentUpper = currentLower + 10;
                    const color = value > currentLower && value <= currentUpper ? colors[0] : colors[1];
                    return <div className={`typechart_diagram-bar-${bar}`} style={{backgroundColor: color}} key={i} ></div>
                })}
            </div>
            <div className="typechart_diagram-graph__bottom">
                <div>0%</div>
                <div>100%</div>
            </div>
        </div>
    )
}