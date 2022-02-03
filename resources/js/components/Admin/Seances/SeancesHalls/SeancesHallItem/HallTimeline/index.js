import {useSelector} from "react-redux";
import TimelineMovie from "./TimelineMovie";

export default function HallTimeline(props) {
    const {seances} = useSelector((state) => state.admin);
    const {hall} = props;

    const hallSeances = seances.filter((seance) => +seance.hall_id === hall);

    return (
        <div className="conf-step__seances-timeline">
            {hallSeances.map((seance) =>
                <TimelineMovie
                    id={seance.film_id}
                    time={seance.time}
                    key={seance.id}
                />
            )}
            {/*<div className="conf-step__seances-movie"*/}
            {/*     style={{width: "60px", backgroundColor: "rgb(133, 255, 137)", left: 0}}>*/}
            {/*    <p className="conf-step__seances-movie-title">Миссия выполнима</p>*/}
            {/*    <p className="conf-step__seances-movie-start">00:00</p>*/}
            {/*</div>*/}
            {/*<div className="conf-step__seances-movie"*/}
            {/*     style={{width: "60px", backgroundColor: "rgb(133, 255, 137)", left: "360px"}}>*/}
            {/*    <p className="conf-step__seances-movie-title">Миссия выполнима</p>*/}
            {/*    <p className="conf-step__seances-movie-start">12:00</p>*/}
            {/*</div>*/}
            {/*<div className="conf-step__seances-movie"*/}
            {/*     style={{width: "65px", backgroundColor: "rgb(202, 255, 133)", left: "420px"}}>*/}
            {/*    <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака клонированных клонов</p>*/}
            {/*    <p className="conf-step__seances-movie-start">14:00</p>*/}
            {/*</div>*/}
        </div>
    );
}
