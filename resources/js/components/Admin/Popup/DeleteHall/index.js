import CloseOk from "../CloseOk";
import {useDispatch, useSelector} from "react-redux";
import {deleteHall, getHalls} from "../../../../reducers/adminSlice";
import {closePopup} from "../../../../reducers/popupSlice";

export default function DeleteHall() {
    const {id} = useSelector((state) => state.popup);
    const {halls} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    const name = halls.find((hall) => hall.id === id).name;

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(deleteHall(id)).then(() => {
            dispatch(closePopup());
            dispatch(getHalls());
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="conf-step__paragraph">Вы действительно хотите удалить зал <span>{name}</span>?</p>
            <CloseOk text={"Удалить"}/>
        </form>
    );
}
