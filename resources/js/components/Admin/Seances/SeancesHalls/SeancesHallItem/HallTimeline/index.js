import {useSelector} from "react-redux";
import TimelineMovie from "./TimelineMovie";

export default function HallTimeline(props) {
    const {seances} = useSelector((state) => state.admin);
    const {hall} = props;

    const hallSeances = seances.filter((seance) => +seance.hall_id === hall);
    hallSeances.sort((a, b) => Date.parse(a.datetime) - Date.parse(b.datetime));

    return (
        <div className="conf-step__seances-timeline">
            {hallSeances.map((seance) =>
                <TimelineMovie
                    id={seance.film_id}
                    seance={seance.id}
                    time={seance.datetime}
                    key={seance.id}
                />
            )}
        </div>
    );
}
