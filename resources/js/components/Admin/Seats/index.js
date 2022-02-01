import CancelSave from "../Buttons/CancelSave";
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {createSeats, getSeats} from "../../../reducers/adminSlice";
import SeatsHall from "./SeatsHall";
import Chair from "./Chair";
import SeatsScheme from "./SeatsScheme";

export default function Seats() {
    const {halls} = useSelector((state) => state.admin);
    const [selectHall, setSelectHall] = useState(null);
    const [inputs, setInputs] = useState({"row": 0, "row_seats": 0});
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectHall) {
            setInputs({"row": selectHall.row, "row_seats": selectHall.row_seats});
            dispatch(getSeats(selectHall.id));
        }
    }, [selectHall]);

    const handleSelect = (id) => {
        setSelectHall(halls.find((hall) => hall.id === id));
    }

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setInputs((prevState) => ({...prevState, [name]: value}));

        const seats = new Array(inputs.row * inputs.row_seats);
        seats.fill({"number": 1, "status": "standard", "hall_id": selectHall.id});
        dispatch(createSeats(seats));
    };

    console.log('render seats');
    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
            <ul className="conf-step__selectors-box">
                {halls.map((hall) =>
                    <SeatsHall
                        name={hall.name}
                        checked={selectHall ? hall.id === selectHall.id : false}
                        callback={() => handleSelect(hall.id)}
                        key={hall.id}
                    />
                )}
            </ul>

            {selectHall &&
            <>
                <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в
                    ряду:</p>
                <div className="conf-step__legend">
                    <label className="conf-step__label">Рядов, шт
                        <input
                            name="row"
                            type="text"
                            className="conf-step__input"
                            value={inputs.row}
                            onChange={handleChange}
                        />
                    </label>
                    <span className="multiplier">x</span>
                    <label className="conf-step__label">Мест, шт
                        <input
                            name="row_seats"
                            type="text"
                            className="conf-step__input"
                            value={inputs.row_seats}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
                <div className="conf-step__legend">
                    <Chair type={"standard"}/> — обычные кресла
                    <Chair type={"vip"}/> — VIP кресла
                    <Chair type={"disabled"}/> — заблокированные (нет кресла)
                    <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
                </div>

                <SeatsScheme rowSeats={inputs.row_seats}/>

                <CancelSave cancel={() => setSelectHall(null)} save={() => console.log('save')}/>
            </>
            }
        </div>
    );
}
