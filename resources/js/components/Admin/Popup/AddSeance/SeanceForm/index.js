import CloseOk from "../../CloseOk";
import {useDispatch, useSelector} from "react-redux";
import {getSeances} from "../../../../../reducers/adminSlice";
import {closePopup, showPopup} from "../../../../../reducers/popupSlice";
import {useState} from "react";

export default function AddSeanceForm(props) {
    const {halls, movies} = useSelector((state) => state.admin);
    const {hall_id, film_id, date, time, callbackSubmit, callbackDelete} = props;
    const today = new Date();
    const dispatch = useDispatch();
    const INIT_STATE = {date, time, hall: hall_id, movie: film_id};
    const [form, setForm] = useState(INIT_STATE);

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setForm((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const datetime = new Date(form.date);
        const datetimeFormatted = `${datetime.getFullYear()}-${('0' + (datetime.getMonth() + 1)).slice(-2)}-${('0' + datetime.getDate()).slice(-2)} ${form.time}`;
        callbackSubmit(datetimeFormatted, form.hall, form.movie).then(() => {
            dispatch(closePopup());
            dispatch(getSeances());
        });
    };

    return (
        <form acceptCharset="utf-8" onSubmit={handleSubmit}>
            <label
                className="conf-step__label conf-step__label-fullsize"
                htmlFor="hall"
            >
                Название зала
                <select
                    className="conf-step__input"
                    name="hall"
                    defaultValue={hall_id}
                    onChange={handleChange}
                    required
                >
                    {halls.map((hall) => <option value={hall.id} key={hall.id}>{hall.name}</option>)}
                </select>
            </label>
            <label className="conf-step__label conf-step__label-fullsize"
                   htmlFor="date"
            >
                Дата сеансов
                <input
                    className="conf-step__input"
                    type="date"
                    name="date"
                    min={`${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}`}
                    max="2032-12-31"
                    value={form.date}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                />
            </label>
            <label
                className="conf-step__label conf-step__label-fullsize"
                htmlFor="time"
            >
                Время начала
                <input
                    className="conf-step__input"
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                />
            </label>

            <label
                className="conf-step__label conf-step__label-fullsize"
                htmlFor="movie"
            >
                Название фильма
                <select
                    className="conf-step__input"
                    name="movie"
                    defaultValue={film_id}
                    onChange={handleChange}
                    required
                >
                    {movies.map((movie) => <option value={movie.id} key={movie.id}>{movie.title}</option>)}
                </select>
            </label>

            <CloseOk text={"Добавить сеанс"} handleDelete={callbackDelete}/>
        </form>
    );
}
