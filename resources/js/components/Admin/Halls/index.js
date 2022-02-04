import SimpleButton from "../Buttons/SimpleButton";
import {useDispatch, useSelector} from "react-redux";
import {showPopup} from "../../../reducers/popupSlice";
import {getHalls} from "../../../reducers/adminSlice";
import {useEffect} from "react";
import HallItem from "./HallItem";

export default function Halls() {
    const {halls} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHalls());
    }, []);

    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Доступные залы:</p>
            <ul className="conf-step__list">
                {halls.map((hall) =>
                    <HallItem
                        id={hall.id}
                        name={hall.name}
                        key={hall.id}
                    />
                )}
            </ul>
            <SimpleButton
                text={"Создать зал"}
                callback={() => dispatch(showPopup({title: "Добавление зала", form: "addHall"}))}
            />
        </div>
    );
}
