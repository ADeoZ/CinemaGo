import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getSchedule} from "../../../reducers/scheduleSlice";
import Movie from "./Movie";
import Client from "../Client";

export default function Main() {
    const {chosenDate, films} = useSelector((state) => state.schedule);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSchedule(chosenDate));
    }, [chosenDate]);

    return (
        <Client nav>
            {films.map((film) =>
                <Movie
                    id={film.id}
                    key={film.id}
                />
            )}
        </Client>
    );
}
