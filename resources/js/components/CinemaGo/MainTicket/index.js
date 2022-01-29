import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import CinemaGo from "../CinemaGo";
import TicketHeader from "../TicketHeader";
import TicketInfo from "../TicketInfo";
import {resetSeance} from "../../../reducers/seanceSlice";

export default function MainTicket() {
    const {session, seats, ticket} = useSelector((state) => state.seance);
    const seatsNumbers = seats.filter((seat) => ticket.seats.includes(seat.id)).map((seat) => seat.number);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetSeance());
    },[]);

    return (
        <CinemaGo>
            <section className="ticket">
                <TicketHeader text={"Электронный билет"}/>
                <div className="ticket__info-wrapper">
                    <TicketInfo
                        film={session.title}
                        seats={seatsNumbers.join(', ')}
                        hall={session.name}
                        time={session.time}
                    />
                    <p className="ticket__hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
                    <p className="ticket__hint">Приятного просмотра!</p>
                </div>
            </section>
        </CinemaGo>
    );
}
