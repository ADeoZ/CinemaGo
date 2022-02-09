import {useState} from "react";
import {useDispatch} from "react-redux";
import CloseOk from "../CloseOk";
import {createHall, getHalls} from "../../../../reducers/adminSlice";
import {closePopup} from "../../../../reducers/popupSlice";

export default function AddHall() {
    const EMPTY_STATE = {name: ""};
    const [form, setForm] = useState(EMPTY_STATE);
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setForm((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createHall(form.name)).then(() => {
            dispatch(closePopup());
            dispatch(getHalls());
        });
    };

    return (
        <form acceptCharset="utf-8" onSubmit={handleSubmit}>
            <label
                className="conf-step__label conf-step__label-fullsize"
                htmlFor="name"
            >
                Название зала
                <input
                    className="conf-step__input"
                    type="text"
                    placeholder="Например, &laquo;Зал 1&raquo;"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <CloseOk text={"Добавить зал"}/>
        </form>
    );
}
