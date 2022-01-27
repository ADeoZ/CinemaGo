import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getSchedule} from "../../../reducers/scheduleSlice";
import Movie from "./Movie";
import CinemaGo from "../CinemaGo";

export default function Main() {
    const {films} = useSelector((state) => state.schedule);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSchedule());
    }, []);

    return (
        <CinemaGo nav>
            {films.map((film) =>
                <Movie
                    id={film.id}
                    key={film.id}
                />
            )}
        </CinemaGo>
    );
}
