import {useDispatch, useSelector} from "react-redux";
import CloseOk from "../CloseOk";
import {deleteSeance, getSeances} from "../../../../reducers/adminSlice";
import {closePopup} from "../../../../reducers/popupSlice";

export default function DeleteSeance() {
    const {id} = useSelector((state) => state.popup);
    const {seances, movies} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    const seance = seances.find((seance) => seance.id == id);
    const title = movies.find((movie) => movie.id == seance.film_id).title;

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(deleteSeance(id));
        dispatch(closePopup());
        dispatch(getSeances());
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="conf-step__paragraph">Вы действительно хотите снять с сеанса фильм <span>{title}</span> в {seance.time}?</p>
            <CloseOk text={"Удалить"}/>
        </form>
    );
}
