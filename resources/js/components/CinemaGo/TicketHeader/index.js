export default function TicketHeader(props) {
    const {text} = props;

    return (
        <header className="ticket__check">
            <h2 className="ticket__check-title">{text}</h2>
        </header>
    );
}
