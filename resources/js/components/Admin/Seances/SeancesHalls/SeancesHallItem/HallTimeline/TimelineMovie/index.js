import {useDispatch, useSelector} from "react-redux";
import {showPopup} from "../../../../../../../reducers/popupSlice";

export default function TimelineMovie(props) {
    const {movies} = useSelector((state) => state.admin);
    const {id, seance, time} = props;
    const dispatch = useDispatch();

    const index = movies.findIndex((movie) => movie.id === +id);
    const movie = movies[index];
    const width = movie.duration / 60 * 30;
    const timeFormatted = new Date('01.01.70 ' + time);
    const shift = (timeFormatted.getHours() + timeFormatted.getMinutes() / 60) * 30;

    return (
        <div
            className={`conf-step__seances-movie conf-step__seances-movie-${index + 1}`}
            style={{width: `${width}px`, left: `${shift}px`}}
            onClick={() => dispatch(showPopup({title: "Удаление сеанса", form: "deleteSeance", id: seance}))}
        >
            <div className="conf-step__close" />
            <p className="conf-step__seances-movie-title">{movie.title}</p>
            <p className="conf-step__seances-movie-start">{time}</p>
        </div>
    );
}
