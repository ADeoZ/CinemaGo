import Movies from "./Movies";
import SeancesHalls from "./SeancesHalls";
import SeancesPickDate from "./SeancesPickDate";

export default function Seances() {
    return (
        <div className="conf-step__wrapper">
            <Movies />
            <p className="conf-step__paragraph">Нажмите на название зала для добавления сеанса, на название фильма в расписании для удаления</p>
            <SeancesPickDate />
            <SeancesHalls />
        </div>
    );
}
