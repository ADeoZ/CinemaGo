export default function AddMovie() {
    return (
        <form method="post" acceptCharset="utf-8">
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Название фильма
                <input className="conf-step__input" type="text" placeholder="Например, &laquo;Гражданин Кейн&raquo;"
                       name="name" required />
            </label>
            <div className="conf-step__buttons text-center">
                <input type="submit" value="Добавить фильм" className="conf-step__button conf-step__button-accent" />
                    <button className="conf-step__button conf-step__button-regular">Отменить</button>
            </div>
        </form>
    );
}
