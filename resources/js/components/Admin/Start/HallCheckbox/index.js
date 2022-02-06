export default function HallCheckbox(props) {
    const {id, name, opened, callback} = props;

    return (
        <>
            <input
                id={`hallCheck${id}`}
                className="conf-step__custom-checkbox"
                type="checkbox"
                checked={opened}
                onChange={callback}
            />
            <label htmlFor={`hallCheck${id}`}>{name}</label>
        </>
    );
}
