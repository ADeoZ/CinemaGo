import {useDispatch} from "react-redux";
import {showPopup} from "../../../../reducers/popupSlice";

export default function HallItem(props) {
    const {id, name} = props;
    const dispatch = useDispatch();

    return (
        <li>{name}
            <button
                className="conf-step__button conf-step__button-trash"
                onClick={() => dispatch(showPopup({title: "Удаление зала", form: "deleteHall", id}))}
            />
        </li>
    );
}
