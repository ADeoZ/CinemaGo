import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Client from "../Client";
import TicketHeader from "../TicketHeader";
import Button from "../Button";
import TicketInfo from "../TicketInfo";

export default function MainBooking() {
    const {session, seats, ticket} = useSelector((state) => state.seance);
    const navigate = useNavigate();

    const seatsNumbers = seats.filter((seat) => ticket.seats.includes(seat.id)).map((seat) => seat.number);

    useEffect(() => {
        if (!session.id || !ticket.seanceId) {
            navigate(-1);
        }
    }, []);

    return (
        <Client>
            <section className="ticket">
                <TicketHeader text={"Вы выбрали билеты:"}/>
                <div className="ticket__info-wrapper">
                    <TicketInfo
                        film={session.title}
                        seats={seatsNumbers.join(', ')}
                        hall={session.name}
                        time={session.time}
                        cost={ticket.cost}
                    />
                    <Button text={"Получить код бронирования"} link={"/ticket"}/>
                    <p className="ticket__hint">После оплаты билет будет доступен в этом окне, а также придёт вам на
                        почту. Покажите QR-код нашему контроллёру у входа в зал.</p>
                    <p className="ticket__hint">Приятного просмотра!</p>
                </div>
            </section>
        </Client>
    );
}
