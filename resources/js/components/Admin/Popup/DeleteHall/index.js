export default function DeleteHall() {
    return (
        <form method="post" acceptCharset="utf-8">
            <p className="conf-step__paragraph">Вы действительно хотите удалить зал <span></span>?</p>
            {/*В span будет подставляться название зала*/}
            <div className="conf-step__buttons text-center">
                <input type="submit" value="Удалить" className="conf-step__button conf-step__button-accent" />
                    <button className="conf-step__button conf-step__button-regular">Отменить</button>
            </div>
        </form>
    );
}
