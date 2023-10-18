
export default function Alert({ prompt }) {
    return (
        <div className="alert">
            <img src="/img/main/alert.png" />
            {prompt}
        </div>
    )
}