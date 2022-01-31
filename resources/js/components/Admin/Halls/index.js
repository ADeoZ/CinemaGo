import SimpleButton from "../Buttons/SimpleButton";
import {useDispatch} from "react-redux";
import {showPopup} from "../../../reducers/popupSlice";

export default function Halls() {
    const dispatch = useDispatch();

    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Доступные залы:</p>
            <ul className="conf-step__list">
                <li>Зал 1
                    <button className="conf-step__button conf-step__button-trash"/>
                </li>
                <li>Зал 2
                    <button className="conf-step__button conf-step__button-trash"/>
                </li>
            </ul>
            <SimpleButton text={"Создать зал"} callback={() => dispatch(showPopup("addHall"))}/>
        </div>
    );
}
