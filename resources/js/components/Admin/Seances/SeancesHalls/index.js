import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSeances} from "../../../../reducers/adminSlice";
import SeancesHallItem from "./SeancesHallItem";

export default function SeancesHalls() {
    const {halls, chosenDate} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSeances());
    },[chosenDate]);

    return (
        <div className="conf-step__seances">
            {halls.map((hall) =>
                <SeancesHallItem
                    hallId={hall.id}
                    name={hall.name}
                    key={hall.id}
                />
            )}
            {halls.length === 0 &&  <p className="conf-step__paragraph">Залы отсутствуют</p>}
        </div>
    );
}
