import CancelSave from "../Buttons/CancelSave";

export default function Prices() {
    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
            <ul className="conf-step__selectors-box">
                <li><input type="radio" className="conf-step__radio" name="prices-hall" value="Зал 1"/><span
                    className="conf-step__selector">Зал 1</span></li>
                <li><input type="radio" className="conf-step__radio" name="prices-hall" value="Зал 2"
                /><span
                    className="conf-step__selector">Зал 2</span></li>
            </ul>

            <p className="conf-step__paragraph">Установите цены для типов кресел:</p>
            <div className="conf-step__legend">
                <label className="conf-step__label">Цена, рублей<input type="text"
                                                                       className="conf-step__input"
                                                                       placeholder="0"/></label>
                за <span className="conf-step__chair conf-step__chair_standard"/> обычные кресла
            </div>
            <div className="conf-step__legend">
                <label className="conf-step__label">Цена, рублей<input type="text"
                                                                       className="conf-step__input"
                                                                       placeholder="0" defaultValue="350"/></label>
                за <span className="conf-step__chair conf-step__chair_vip"/> VIP кресла
            </div>

            <CancelSave cancel={() => console.log('cancel')} save={() => console.log('save')}/>
        </div>
    );
}
