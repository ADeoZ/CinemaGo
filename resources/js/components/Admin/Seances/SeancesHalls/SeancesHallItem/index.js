import HallTimeline from "./HallTimeline";
import {showPopup} from "../../../../../reducers/popupSlice";
import {useDispatch} from "react-redux";
import RadioHall from "../../../Buttons/RadioHall";

export default function SeancesHallItem(props) {
    const {hallId, name} = props;
    const dispatch = useDispatch();

    return (
        <div className="conf-step__seances-hall">
            <div className="conf-step__selectors-box">
                <RadioHall
                    name={name}
                    checked={false}
                    callback={() => dispatch(showPopup({title: "Добавление сеанса", form: "addSeance", id: hallId}))}
                />
            </div>
            <HallTimeline hall={hallId}/>
        </div>
    );
}
