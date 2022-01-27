import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSeance} from "../../../reducers/seanceSlice";
import CinemaGo from "../CinemaGo";
import SeanceInfo from "./SeanceInfo";
import SeanceHall from "./SeanceHall";
import Button from "../Button";

export default function MainSeance() {
    const {session, seats} = useSelector((state) => state.seance);
    const seanceId = useParams().seanceId;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSeance(seanceId));
    }, []);

    return (
        <CinemaGo>
            <section className="buying">
            <SeanceInfo/>
            <SeanceHall/>
            <Button text={"Забронировать"} link={"booking"}/>
            </section>
        </CinemaGo>
    );
}
