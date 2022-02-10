import {useDispatch, useSelector} from "react-redux";
import {updateMovie} from "../../../../reducers/adminSlice";
import {showPopup} from "../../../../reducers/popupSlice";
import MovieForm from "../AddMovie/MovieForm";

export default function AddMovie() {
    const dispatch = useDispatch();
    const {id} = useSelector((state) => state.popup);
    const {movies} = useSelector((state) => state.admin);
    const movie = movies.find((movie) => movie.id === id);

    return (
        <MovieForm
            title={movie.title}
            description={movie.description}
            duration={movie.duration}
            country={movie.country}
            poster={movie.poster}
            callbackSubmit={(title, description, duration, country, poster) => dispatch(updateMovie({
                id,
                title,
                description,
                duration,
                country,
                poster
            }))}
            callbackDelete={() => dispatch(showPopup({title: "Удаление фильма", form: "deleteMovie", id}))}
        />
    );
}
