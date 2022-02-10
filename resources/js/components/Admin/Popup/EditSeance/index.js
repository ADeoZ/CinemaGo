import {useDispatch, useSelector} from "react-redux";
import {updateSeance} from "../../../../reducers/adminSlice";
import {showPopup} from "../../../../reducers/popupSlice";
import SeanceForm from "../AddSeance/SeanceForm";

export default function EditSeance(props) {
    const dispatch = useDispatch();
    const {id} = useSelector((state) => state.popup);
    const {seances} = useSelector((state) => state.admin);
    const session = seances.find((session) => session.id === id);
    const datetime = new Date(session.datetime);

    return (
        <SeanceForm
            hall_id={session.hall_id}
            film_id={session.film_id}
            date={`${datetime.getFullYear()}-${('0' + (datetime.getMonth() + 1)).slice(-2)}-${('0' + datetime.getDate()).slice(-2)}`}
            time={`${('0' + (datetime.getHours())).slice(-2)}:${('0' + datetime.getMinutes()).slice(-2)}`}
            callbackSubmit={(datetime, hall_id, film_id) => dispatch(updateSeance({id, datetime, hall_id, film_id}))}
            callbackDelete={() => dispatch(showPopup({title: "Удаление сеанса", form: "deleteSeance", id}))}
        />
    );
}
