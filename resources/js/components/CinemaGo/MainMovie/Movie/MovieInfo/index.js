import {useSelector} from "react-redux";

export default function MovieInfo(props) {
    const {films} = useSelector((state) => state.schedule);
    const {id} = props;
    const film = films.find((film) => film.id === id);

    const minutesWordEnding = (n) => {
        const div = Math.abs(n) % 100 % 10;
        if (n > 10 && n < 20) {
            return 'минут';
        }
        if (div > 1 && div < 5) {
            return 'минуты';
        }
        if (div === 1) {
            return 'минута';
        }
        return 'минут';
    }

    return (
        <div className="movie__info">
            <div className="movie__poster">
                <img className="movie__poster-image" alt={`${film.title} постер`}
                     src={`images/poster${Math.floor(Math.random() * 5) + 1}.jpg`}/>
            </div>
            <div className="movie__description">
                <h2 className="movie__title">{film.title}</h2>
                <p className="movie__synopsis">{film.description}</p>
                <p className="movie__data">
                    <span className="movie__data-duration">{film.duration} {minutesWordEnding(film.duration)}</span>
                    {" - "}
                    <span className="movie__data-origin">{film.country}</span>
                </p>
            </div>
        </div>
    );
}
