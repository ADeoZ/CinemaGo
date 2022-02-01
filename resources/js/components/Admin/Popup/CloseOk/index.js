import {useDispatch} from "react-redux";
import {closePopup} from "../../../../reducers/popupSlice";

export default function CloseOk(props) {
    const {text} = props;
    const dispatch = useDispatch();

    const handleCancel = (e) => {
        e.preventDefault();
        dispatch(closePopup());
    }

    return (
        <div className="conf-step__buttons text-center">
            <input
                type="submit"
                value={text}
                className="conf-step__button conf-step__button-accent"
            />
            <button className="conf-step__button conf-step__button-regular" onClick={handleCancel}>Отменить</button>
        </div>
    );
}
