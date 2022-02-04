import {useSelector} from "react-redux";
import TimelineMovie from "./TimelineMovie";

export default function HallTimeline(props) {
    const {seances, movies} = useSelector((state) => state.admin);
    const {hall} = props;

    const hallSeances = seances.filter((seance) => +seance.hall_id === hall);
    hallSeances.sort((a, b) => Date.parse('01.01.70 ' + a.time) - Date.parse('01.01.70 ' + b.time));

    // // вычисляем пересечения между сеансами
    // console.log('зал ' + hall, hallSeances);
    // const intersections = [];
    // for (let i = 0; i < hallSeances.length; i++) {
    //     const duration = movies.find((movie) => movie.id === +hallSeances[i].film_id).duration;
    //     const timeStart = Date.parse('01.01.70 ' + hallSeances[i].time);
    //     const timeEnd = timeStart + duration * 60000;
    //     console.log(new Date(timeStart).getHours() + ":" + new Date(timeStart).getMinutes(), new Date(timeEnd).getHours() + ":" + new Date(timeEnd).getMinutes());
    //     if (hallSeances[i - 1]) {
    //
    //     }
    // }

    return (
        <div className="conf-step__seances-timeline">
            {hallSeances.map((seance) =>
                <TimelineMovie
                    id={seance.film_id}
                    seance={seance.id}
                    time={seance.time}
                    key={seance.id}
                />
            )}
        </div>
    );
}
