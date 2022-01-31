import closeImg from "../images/close.png";
import AddHall from "./AddHall";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import {closePopup} from "../../../reducers/popupSlice";
import DeleteHall from "./DeleteHall";
import AddMovie from "./AddMovie";
import AddSeance from "./AddSeance";
import DeleteSeance from "./DeleteSeance";

export default function Popup() {
    const {active, form} = useSelector((state) => state.popup);
    const dispatch = useDispatch();

    return (
        <div className={classNames("popup", {"active": active})}>
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            Добавление зала
                            <a
                                className="popup__dismiss"
                                href="#"
                                onClick={() => dispatch(closePopup())}
                            >
                                <img src={closeImg} alt="Закрыть"/>
                            </a>
                        </h2>
                    </div>
                    <div className="popup__wrapper">
                        {form === "addHall" && <AddHall/>}
                        {form === "deleteHall" && <DeleteHall/>}
                        {form === "addMovie" && <AddMovie/>}
                        {form === "addSeance" && <AddSeance/>}
                        {form === "deleteSeance" && <DeleteSeance/>}
                    </div>
                </div>
            </div>
        </div>
    );
}
