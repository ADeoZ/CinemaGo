import {useSelector} from "react-redux";

export default function TimelineMovie(props) {
    const {movies} = useSelector((state) => state.admin);
    const {id, time} = props;

    const movie = movies.find((movie) => movie.id === +id);
    const width = movie.duration / 60 * 30;
    const timeFormatted = new Date('01.01.70 ' + time);
    const shift = (timeFormatted.getHours() + timeFormatted.getMinutes() / 60) * 30;

    return (
        <div className="conf-step__seances-movie"
             style={{width: `${width}px`, backgroundColor: "rgb(133, 255, 137)", left: `${shift}px`}}>
            <p className="conf-step__seances-movie-title">{movie.title}</p>
            <p className="conf-step__seances-movie-start">{time}</p>
        </div>
    );
}
