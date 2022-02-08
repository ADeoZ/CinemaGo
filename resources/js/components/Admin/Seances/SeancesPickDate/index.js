import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {chooseDate} from "../../../../reducers/adminSlice";

export default function SeancesPickDate() {
    const {chosenDate} = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    const today = new Date();

    const handleChange = ({target}) => {
        dispatch(chooseDate(target.value));
    };

    return (
        <div className="conf_step__datepicker">
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="datepicker">Дата сеансов:
                <input
                    className="conf-step__input"
                    type="date"
                    name="datepicker"
                    min={`${today.getFullYear()}-${('0' + (today.getMonth()+1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}`}
                    max="2032-12-31"
                    value={chosenDate}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                />
            </label>
        </div>
    );
}
