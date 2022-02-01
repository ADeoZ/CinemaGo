import classNames from "classnames";

export default function Chair(props) {
    const {type} = props;

    let typeClass;
    switch (type) {
        case "standard":
            typeClass = "conf-step__chair_standard";
            break;
        case "disabled":
            typeClass = "conf-step__chair_disabled";
            break;
        case "vip":
            typeClass = "conf-step__chair_vip";
            break;
        default:
            typeClass = "conf-step__chair_standard";
            break;
    }

    return (
        <span
            className={classNames("conf-step__chair", typeClass)}
        />
    );
}
