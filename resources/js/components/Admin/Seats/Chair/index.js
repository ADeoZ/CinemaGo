import classNames from "classnames";

export default function Chair(props) {
    const {status, callback} = props;

    let statusClass;
    switch (status) {
        case "standard":
            statusClass = "conf-step__chair_standard";
            break;
        case "disabled":
            statusClass = "conf-step__chair_disabled";
            break;
        case "vip":
            statusClass = "conf-step__chair_vip";
            break;
        default:
            statusClass = "conf-step__chair_standard";
            break;
    }

    return (
        <span
            className={classNames("conf-step__chair", statusClass)}
            onClick={callback}
        />
    );
}
