import {useDispatch} from "react-redux";
import {createMovie} from "../../../../reducers/adminSlice";
import MovieForm from "./MovieForm";

export default function AddMovie() {
    const dispatch = useDispatch();

    return (
        <MovieForm
            callbackSubmit={(title, description, duration, country, poster) => dispatch(createMovie({
                title,
                description,
                duration,
                country,
                poster
            }))}
        />
    );
}
