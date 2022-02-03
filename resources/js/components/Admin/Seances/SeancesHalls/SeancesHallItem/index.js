import HallTimeline from "./HallTimeline";

export default function SeancesHallItem(props) {
    const {id, name} = props;

    return (
        <div className="conf-step__seances-hall">
            <h3 className="conf-step__seances-title">{name}</h3>
            <HallTimeline hall={id}/>
        </div>
    );
}
