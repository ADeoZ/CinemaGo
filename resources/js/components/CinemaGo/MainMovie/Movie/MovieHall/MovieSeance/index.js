import {Link} from "react-router-dom";

export default function MovieSeance(props) {
    const {id, time} = props;
    return (
        <li className="movie-seances__time-block">
            <Link className="movie-seances__time" to={`hall/${id}`}>{time}</Link>
        </li>
    );
}
