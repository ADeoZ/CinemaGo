import {useDispatch, useSelector} from "react-redux";
import CloseOk from "../CloseOk";
import {createSeance, getSeances} from "../../../../reducers/adminSlice";
import {closePopup} from "../../../../reducers/popupSlice";
import {useState} from "react";

export default function AddSeance() {
    const {id} = useSelector((state) => state.popup);
    const {halls, movies} = useSelector((state) => state.admin);
    const EMPTY_STATE = {time: "00:00", hall: id, movie: movies[0].id};
    const [form, setForm] = useState(EMPTY_STATE);
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setForm((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createSeance({
            time: form.time,
            hall_id: form.hall,
            film_id: form.movie,
        }));
        dispatch(closePopup());
        dispatch(getSeances());
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
                    defaultValue={id}
                    onChange={handleChange}
                    required
                >
                    {halls.map((hall) => <option value={hall.id} key={hall.id}>{hall.name}</option>)}
                </select>
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
                    onChange={handleChange}
                    required
                >
                    {movies.map((movie) => <option value={movie.id} key={movie.id}>{movie.title}</option>)}
                </select>
            </label>

            <CloseOk text={"Добавить"}/>
        </form>
    );
}
