import {useDispatch, useSelector} from "react-redux";
import {createSeance} from "../../../../reducers/adminSlice";
import SeanceForm from "./SeanceForm";

export default function AddSeance(props) {
    const {movies, chosenDate} = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    const {id} = useSelector((state) => state.popup);

    return (
        <SeanceForm
            callbackSubmit={(datetime, hall_id, film_id) => dispatch(createSeance({datetime, hall_id, film_id}))}
            hall_id={id}
            film_id={movies[0].id}
            date={chosenDate}
            time={"00:00"}
        />
    );
}
