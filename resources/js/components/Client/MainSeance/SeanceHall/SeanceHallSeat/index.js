import classNames from "classnames/bind";
import {useState} from 'react';

export default function SeanceHallSeat(props) {
    const {status, callback} = props;
    const [taken, setTaken] = useState(0);

    const clickHandle = () => {
        setTaken(!taken);
        callback();
    }

    let activeClass = "buying-scheme__chair_disabled";
    switch (status) {
        case "disabled":
            activeClass = "buying-scheme__chair_disabled";
            break;
        case "standard":
            activeClass = "buying-scheme__chair_standard";
            break;
        case "vip":
            activeClass = "buying-scheme__chair_vip";
            break;
        case "sold":
            activeClass = "buying-scheme__chair_taken";
            break;
    }

    return (
        <span className={classNames(
            "buying-scheme__chair",
            taken ? "buying-scheme__chair_selected" : activeClass
        )}
              onClick={() => status === "disabled" || status === "sold" ? false : clickHandle()}
        />
    );
}
