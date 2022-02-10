import {useCountableEndings} from "../../../../customHooks/useCountableEndings";
import {useDispatch} from "react-redux";
import {showPopup} from "../../../../../reducers/popupSlice";

export default function MovieItem(props) {
    const {id, img, title, duration} = props;
    const [filmDuration, durationEnding] = useCountableEndings(duration, ['минут', 'минуты', 'минута']);
    const dispatch = useDispatch();


    return (
        <div
            className="conf-step__movie"
            onClick={() => dispatch(showPopup({title: "Редактирование фильма", form: "editMovie", id}))}
        >
            <img className="conf-step__movie-poster" alt="poster" src={`../images/${img}`}/>
            <h3 className="conf-step__movie-title">{title}</h3>
            <p className="conf-step__movie-duration">{filmDuration} {durationEnding}</p>
        </div>
    );
}
