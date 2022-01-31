import CancelSave from "../Buttons/CancelSave";

export default function Seats() {
    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
            <ul className="conf-step__selectors-box">
                <li><input type="radio" className="conf-step__radio" name="chairs-hall" value="Зал 1"
                /><span
                    className="conf-step__selector">Зал 1</span></li>
                <li><input type="radio" className="conf-step__radio" name="chairs-hall" value="Зал 2"/><span
                    className="conf-step__selector">Зал 2</span></li>
            </ul>
            <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в
                ряду:</p>
            <div className="conf-step__legend">
                <label className="conf-step__label">Рядов, шт<input type="text" className="conf-step__input"
                                                                    placeholder="10"/></label>
                <span className="multiplier">x</span>
                <label className="conf-step__label">Мест, шт<input type="text" className="conf-step__input"
                                                                   placeholder="8"/></label>
            </div>
            <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
            <div className="conf-step__legend">
                <span className="conf-step__chair conf-step__chair_standard"/> — обычные кресла
                <span className="conf-step__chair conf-step__chair_vip"/> — VIP кресла
                <span className="conf-step__chair conf-step__chair_disabled"/> — заблокированные (нет
                кресла)
                <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой
                    мыши</p>
            </div>

            <div className="conf-step__hall">
                <div className="conf-step__hall-wrapper">
                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_disabled"/><span
                        className="conf-step__chair conf-step__chair_disabled"/>
                        <span className="conf-step__chair conf-step__chair_disabled"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_disabled"/>
                        <span className="conf-step__chair conf-step__chair_disabled"/><span
                        className="conf-step__chair conf-step__chair_disabled"/>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_disabled"/><span
                        className="conf-step__chair conf-step__chair_disabled"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_disabled"/><span
                        className="conf-step__chair conf-step__chair_disabled"/>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_disabled"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_disabled"/>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_vip"/>
                        <span className="conf-step__chair conf-step__chair_vip"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_disabled"/>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_vip"/><span
                        className="conf-step__chair conf-step__chair_vip"/>
                        <span className="conf-step__chair conf-step__chair_vip"/><span
                        className="conf-step__chair conf-step__chair_vip"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_disabled"/>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_vip"/><span
                        className="conf-step__chair conf-step__chair_vip"/>
                        <span className="conf-step__chair conf-step__chair_vip"/><span
                        className="conf-step__chair conf-step__chair_vip"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_disabled"/>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_vip"/><span
                        className="conf-step__chair conf-step__chair_vip"/>
                        <span className="conf-step__chair conf-step__chair_vip"/><span
                        className="conf-step__chair conf-step__chair_vip"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_disabled"/>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_disabled"/>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                        <span className="conf-step__chair conf-step__chair_standard"/><span
                        className="conf-step__chair conf-step__chair_standard"/>
                    </div>
                </div>
            </div>

            <CancelSave cancel={() => console.log('cancel')} save={() => console.log('save')}/>
        </div>
    );
}
