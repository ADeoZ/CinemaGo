import {useSelector} from "react-redux";

export default function SeanceInfo() {
    const {session} = useSelector((state) => state.seance);

    return (
        <div className="buying__info">
            <div className="buying__info-description">
                <h2 className="buying__info-title">{session.title}</h2>
                <p className="buying__info-start">Начало сеанса: {session.time}</p>
                <p className="buying__info-hall">{session.name}</p>
            </div>
        </div>
);
}
