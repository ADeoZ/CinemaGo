export default function AddSeance() {
    return (
        <form method="post" acceptCharset="utf-8">
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="hall">
                Название зала
                <select className="conf-step__input" name="hall" required>
                    <option value="1" selected>Зал 1</option>
                    <option value="2">Зал 2</option>
                </select>
            </label>
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Время начала
                <input className="conf-step__input" type="time" value="00:00" name="start_time" required />
            </label>

            <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Название зала
                <input className="conf-step__input" type="text" placeholder="Например, &laquo;Зал 1&raquo;" name="name"
                       required />
            </label>

            <div className="conf-step__buttons text-center">
                <input type="submit" value="Добавить" className="conf-step__button conf-step__button-accent" />
                    <button className="conf-step__button conf-step__button-regular">Отменить</button>
            </div>
        </form>
    );
}
