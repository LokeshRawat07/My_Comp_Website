import '../css/alert.css'

export default function Alert(props) {
    return (
        <div className={`alert ${props.Style}`}>
            <h3>{props.message}</h3>
            <div className="close" onClick={props.function}>&times;</div>
        </div>
    )
}
