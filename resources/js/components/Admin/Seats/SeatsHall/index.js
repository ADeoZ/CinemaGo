export default function SeatsHall(props) {
    const {name, checked, callback} = props;

    const handleChange = () => {
        callback();
    }

    return (
        <li>
            <input
                type="radio"
                className="conf-step__radio"
                name="chairs-hall"
                value={name}
                checked={checked}
                onChange={() => handleChange()}
            />
            <span className="conf-step__selector">{name}</span>
        </li>
    );
}
