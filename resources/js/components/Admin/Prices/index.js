import CancelSave from "../Buttons/CancelSave";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import RadioHall from "../Buttons/RadioHall";
import Chair from "../Seats/Chair";
import {getHalls, updateHall} from "../../../reducers/adminSlice";

export default function Prices() {
    const {halls} = useSelector((state) => state.admin);
    const [selectedHall, setSelectedHall] = useState(null);
    const dispatch = useDispatch();

    const handleSelect = (id) => {
        setSelectedHall(halls.find((hall) => hall.id === id));
    }

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setSelectedHall((prevState) => ({...prevState, [name]: value}));
    }

    const handleSave = () => {
        dispatch(updateHall(selectedHall));
        setSelectedHall(null);
        dispatch(getHalls());
    }

    console.log('3. render prices');
    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
            <ul className="conf-step__selectors-box">
                {halls.map((hall) =>
                    <RadioHall
                        name={hall.name}
                        checked={selectedHall ? hall.id === selectedHall.id : false}
                        callback={() => handleSelect(hall.id)}
                        key={hall.id}
                    />
                )}
            </ul>

            {selectedHall &&
            <>
                <p className="conf-step__paragraph">Установите цены для типов кресел:</p>
                <div className="conf-step__legend">
                    <label className="conf-step__label">Цена, рублей
                        <input
                            name="price_standard"
                            type="text"
                            className="conf-step__input"
                            value={selectedHall.price_standard}
                            onChange={handleChange}
                        />
                    </label>
                    за <Chair status={"standard"}/> обычные кресла
                </div>
                <div className="conf-step__legend">
                    <label className="conf-step__label">Цена, рублей
                        <input
                            name="price_vip"
                            type="text"
                            className="conf-step__input"
                            value={selectedHall.price_vip}
                            onChange={handleChange}
                        />
                    </label>
                    за <Chair status={"vip"}/> VIP кресла
                </div>

                <CancelSave
                    cancel={() => setSelectedHall(null)}
                    save={() => handleSave()}
                />
            </>
            }
        </div>
    );
}
