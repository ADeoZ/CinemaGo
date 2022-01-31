import {useSelector} from "react-redux";
import MovieSeance from "./MovieSeance";

export default function MovieHall(props) {
    const {halls} = useSelector((state) => state.schedule);
    const {hallId, filmId} = props;
    const hall = halls.find((hall) => hall.id === hallId);
    const hallSeances = hall.sessions.filter((session) => +session.film_id === filmId);

    return (
        <div className="movie-seances__hall">
            <h3 className="movie-seances__hall-title">{hall.name}</h3>
            <ul className="movie-seances__list">
                {hallSeances.map((seance) =>
                    <MovieSeance
                        id={seance.id}
                        time={seance.time}
                        key={seance.id}
                    />
                )}
            </ul>
        </div>
    );
}
