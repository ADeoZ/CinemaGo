import HallTimeline from "./HallTimeline";
import {showPopup} from "../../../../../reducers/popupSlice";
import {useDispatch} from "react-redux";
import RadioHall from "../../../Buttons/RadioHall";

export default function SeancesHallItem(props) {
    const {id, name} = props;
    const dispatch = useDispatch();

    return (
        <div className="conf-step__seances-hall">
            {/*<h3*/}
            {/*    className="conf-step__seances-title"*/}
            {/*    onClick={() => dispatch(showPopup({title: "Добавление сеанса", form: "addSeance", id}))}*/}
            {/*>*/}
            {/*    {name}*/}
            {/*</h3>*/}
            <div className="conf-step__selectors-box">
                <RadioHall
                    name={name}
                    checked={false}
                    callback={() => dispatch(showPopup({title: "Добавление сеанса", form: "addSeance", id}))}
                />
            </div>
            <HallTimeline hall={id}/>
        </div>
    );
}
