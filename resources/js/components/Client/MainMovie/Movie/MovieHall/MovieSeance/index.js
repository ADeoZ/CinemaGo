import {Link} from "react-router-dom";

export default function MovieSeance(props) {
    const {id, time} = props;

    const datetime = new Date(time);

    return (
        <li className="movie-seances__time-block">
            <Link className="movie-seances__time" to={`seance/${id}`}>
                {datetime.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'})}
            </Link>
        </li>
    );
}
