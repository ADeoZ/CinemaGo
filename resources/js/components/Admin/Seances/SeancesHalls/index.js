import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSeances} from "../../../../reducers/adminSlice";
import SeancesHallItem from "./SeancesHallItem";

export default function SeancesHalls() {
    const {seances, halls} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSeances());
    },[]);

    return (
        <div className="conf-step__seances">
            {halls.map((hall) =>
                <SeancesHallItem
                    id={hall.id}
                    name={hall.name}
                    key={hall.id}
                />
            )}
        </div>
    );
}
