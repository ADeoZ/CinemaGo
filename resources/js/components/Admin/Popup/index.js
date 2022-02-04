import closeImg from "../images/close.png";
import AddHall from "./AddHall";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import {closePopup} from "../../../reducers/popupSlice";
import DeleteHall from "./DeleteHall";
import AddMovie from "./AddMovie";
import DeleteMovie from "./DeleteMovie";
import AddSeance from "./AddSeance";
import DeleteSeance from "./DeleteSeance";

export default function Popup() {
    const {active, title, form} = useSelector((state) => state.popup);
    const dispatch = useDispatch();

    return (
        <div className={classNames("popup", {"active": active})}>
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            {title}
                            <a
                                className="popup__dismiss"
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
                        {form === "deleteMovie" && <DeleteMovie/>}
                        {form === "addSeance" && <AddSeance/>}
                        {form === "deleteSeance" && <DeleteSeance/>}
                    </div>
                </div>
            </div>
        </div>
    );
}
