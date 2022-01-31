export default function CancelSave(props) {
    const {cancel, save} = props;

    return (
        <fieldset className="conf-step__buttons text-center">
            <button className="conf-step__button conf-step__button-regular" onClick={() => cancel()}>Отмена</button>
            <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" onClick={() => save()}/>
        </fieldset>
    );
}
