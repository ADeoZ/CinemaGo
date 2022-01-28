import {useSelector} from "react-redux";

export default function BookingInfo() {
    const {session, seats, ticket} = useSelector((state) => state.seance);

    const seatsNumbers = seats.filter((seat) => ticket.seats.includes(seat.id)).map((seat) => seat.number);

    return (
        <>
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{session.title}</span></p>
            <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">{seatsNumbers.join(', ')}</span></p>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{session.name}</span></p>
            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{session.time}</span></p>
            <p className="ticket__info">Стоимость: <span className="ticket__details ticket__cost">{ticket.cost}</span> рублей</p>
        </>
    )
        ;
}
