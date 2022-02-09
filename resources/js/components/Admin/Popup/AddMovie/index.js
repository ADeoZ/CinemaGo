import {useState, useRef} from "react";
import {useDispatch} from "react-redux";
import {createMovie, getMovies} from "../../../../reducers/adminSlice";
import {closePopup} from "../../../../reducers/popupSlice";
import CloseOk from "../CloseOk";

export default function AddMovie() {
    const EMPTY_STATE = {title: "", description: "", duration: "", country: ""};
    const [form, setForm] = useState(EMPTY_STATE);
    const dispatch = useDispatch();
    const fileInput = useRef(null);

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setForm((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createMovie({
            title: form.title,
            description: form.description,
            duration: form.duration,
            country: form.country,
            poster: fileInput.current.files[0],
        })).then(() => {
            dispatch(closePopup());
            dispatch(getMovies());
        });

    };

    return (
        <form acceptCharset="utf-8" onSubmit={handleSubmit}>
            <label
                className="conf-step__label conf-step__label-fullsize"
                htmlFor="poster"
            >
                Постер фильма (до 2Мб)
                <input
                    className="conf-step__input"
                    type="file"
                    accept="image/*"
                    name="poster"
                    ref={fileInput}
                    required
                />
            </label>
            <label
                className="conf-step__label conf-step__label-fullsize"
                htmlFor="name"
            >
                Название фильма
                <input
                    className="conf-step__input"
                    type="text"
                    placeholder="Например, &laquo;Гражданин Кейн&raquo;"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />
            </label>
            <label
                className="conf-step__label conf-step__label-fullsize"
                htmlFor="description"
            >
                Описание
                <input
                    className="conf-step__input"
                    type="text"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                />
            </label>
            <label
                className="conf-step__label conf-step__label-fullsize"
                htmlFor="duration"
            >
                Длительность
                <input
                    className="conf-step__input"
                    type="number"
                    placeholder="120"
                    name="duration"
                    value={form.duration}
                    onChange={handleChange}
                    required
                />
            </label>
            <label
                className="conf-step__label conf-step__label-fullsize"
                htmlFor="country"
            >
                Страна
                <input
                    className="conf-step__input"
                    type="text"
                    placeholder="Например, Россия"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                />
            </label>
            <CloseOk text={"Добавить фильм"}/>
        </form>
    );
}
