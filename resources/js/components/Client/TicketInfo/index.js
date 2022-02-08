import {useCountableEndings} from "../../customHooks/useCountableEndings";

export default function TicketInfo(props) {
    const {film, seats, hall, time, cost} = props;
    const datetime = new Date(time);


    const [ticketCost, ticketEnding] = useCountableEndings(cost, ['рублей', 'рубля', 'рубль']);

    return (
        <>
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{film}</span></p>
            <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">{seats}</span></p>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{hall}</span></p>
            <p className="ticket__info">
                Начало сеанса: <span className="ticket__details ticket__start">{time &&
            datetime.toLocaleDateString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            })}</span>
            </p>
            {cost &&
            <p className="ticket__info">Стоимость: <span
                className="ticket__details ticket__cost">{ticketCost}</span> {ticketEnding}</p>
            }
        </>
    );
}
