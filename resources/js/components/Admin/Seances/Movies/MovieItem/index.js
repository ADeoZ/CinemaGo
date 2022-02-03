import {useCountableEndings} from "../../../../customHooks/useCountableEndings";

export default function MovieItem(props) {
    const {img, title, duration} = props;
    const [filmDuration, durationEnding] = useCountableEndings(duration, ['минут', 'минуты', 'минута']);

    return (
        <div className="conf-step__movie">
            <img className="conf-step__movie-poster" alt="poster" src={`../images/${img}`}/>
            <h3 className="conf-step__movie-title">{title}</h3>
            <p className="conf-step__movie-duration">{filmDuration} {durationEnding}</p>
        </div>
    );
}
