import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovies} from "../../../../reducers/adminSlice";
import MovieItem from "./MovieItem";
import SimpleButton from "../../Buttons/SimpleButton";
import {showPopup} from "../../../../reducers/popupSlice";

export default function Movies() {
    const {movies} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <>
            <p className="conf-step__paragraph">
                <SimpleButton
                    text={"Добавить фильм"}
                    callback={() => dispatch(showPopup({form: "addMovie"}))}
                />
            </p>
            <div className="conf-step__movies">
                {movies.map((movie) =>
                    <MovieItem
                        img={`poster${Math.floor(Math.random() * 5) + 1}.jpg`}
                        title={movie.title}
                        duration={movie.duration}
                        key={movie.id}
                    />
                )}
            </div>
        </>
    );
}
