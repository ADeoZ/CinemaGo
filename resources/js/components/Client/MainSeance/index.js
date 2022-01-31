import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {createTicket, getSeance} from "../../../reducers/seanceSlice";
import Client from "../Client";
import SeanceInfo from "./SeanceInfo";
import SeanceHall from "./SeanceHall";
import Button from "../Button";

export default function MainSeance() {
    const {session} = useSelector((state) => state.seance);
    const seanceId = useParams().seanceId;
    const dispatch = useDispatch();
    const selectedSeats = [];

    useEffect(() => {
        dispatch(getSeance(seanceId));
    }, []);

    const selectHandle = (id, status) => {
        const price = status === "vip" ? session.price_vip : session.price_standard;
        const hasSeat = selectedSeats.findIndex((seat) => seat.id === id);
        if (hasSeat !== -1) {
            selectedSeats.splice(hasSeat, 1);
        } else {
            selectedSeats.push({id, price});
        }
    }

    const submitHandle = () => {
        const ticket = selectedSeats.reduce((res, seat) => {
            res.seats.push(seat.id);
            res.cost += +seat.price;
            return res;
        }, {seats: [], cost: 0})
        dispatch(createTicket({seanceId, seats: ticket.seats, cost: ticket.cost}));
    }

    return (
        <Client>
            <section className="buying">
                <SeanceInfo/>
                <SeanceHall callback={selectHandle}/>
                <Button text={"Забронировать"} link={"/booking"} callback={submitHandle}/>
            </section>
        </Client>
    );
}
