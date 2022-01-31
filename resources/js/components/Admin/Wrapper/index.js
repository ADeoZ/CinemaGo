import {useState} from "react";
import classNames from "classnames";

export default function Wrapper(props) {
    const [opened, setOpened] = useState(true);

    return (
        <section className="conf-step">
            <header className={classNames("conf-step__header",
                {
                    "conf-step__header_opened": opened,
                    "conf-step__header_closed": !opened
                }
            )}
                    onClick={() => setOpened(!opened)}>
                <h2 className="conf-step__title">{props.title}</h2>
            </header>
            {props.children}
        </section>
    );
}
