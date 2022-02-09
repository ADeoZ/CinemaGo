import CloseOk from "../CloseOk";
import {useDispatch, useSelector} from "react-redux";
import {deleteMovie, getMovies, getSeances} from "../../../../reducers/adminSlice";
import {closePopup} from "../../../../reducers/popupSlice";

export default function DeleteMovie() {
    const {id} = useSelector((state) => state.popup);
    const {movies} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    const title = movies.find((movie) => movie.id === id).title;

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(deleteMovie(id)).then(() => {
            dispatch(closePopup());
            dispatch(getSeances());
            dispatch(getMovies());
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="conf-step__paragraph">Вы действительно хотите удалить фильм <span>{title}</span>?</p>
            <CloseOk text={"Удалить"}/>
        </form>
    );
}
