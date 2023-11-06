
export default function Alert({ prompt, style }) {
    return (
        <div className="alert" style={style}>
            <img src="/img/main/alert.png" />
            {prompt}
        </div>
    )
}