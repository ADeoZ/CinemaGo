import {useDispatch, useSelector} from "react-redux";
import {
    createScheme,
    selectHallScheme,
    changeHallSize,
    getSeats,
    updateSeats,
    createSeats,
    updateHall,
    getHalls,
} from "../../../reducers/adminSlice";
import RadioHall from "../Buttons/RadioHall";
import Chair from "./Chair";
import SeatsScheme from "./SeatsScheme";
import CancelSave from "../Buttons/CancelSave";

export default function Seats() {
    const {halls, selectedHallScheme} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    const handleSelect = (id) => {
        dispatch(selectHallScheme(halls.find((hall) => hall.id === id)));
        dispatch(getSeats(id));
    }

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;

        // меняем размеры зала
        const hallSize = {
            "row": selectedHallScheme.row,
            "row_seats": selectedHallScheme.row_seats,
            [name]: value
        };
        dispatch(changeHallSize(hallSize));

        // создаём места по новым размерам
        const seats = Array.from({length: hallSize.row * hallSize.row_seats}, (_, i) => {
            return {"id": i + 1, "number": i + 1, "status": "standard", "hall_id": selectedHallScheme.id}
        });
        dispatch(createScheme(seats));
    };

    const handleSave = () => {
        const hallSource = halls.find((hall) => hall.id === selectedHallScheme.id);
        if (hallSource.row === selectedHallScheme.row && hallSource.row_seats === selectedHallScheme.row_seats) {
            dispatch(updateSeats());
        } else {
            dispatch(updateHall(selectedHallScheme));
            dispatch(createSeats());
            dispatch(getHalls());
        }
        dispatch(selectHallScheme({}));
    }

    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
            <ul className="conf-step__selectors-box">
                {halls.map((hall) =>
                    <RadioHall
                        name={hall.name}
                        checked={selectedHallScheme ? hall.id === selectedHallScheme.id : false}
                        callback={() => handleSelect(hall.id)}
                        key={hall.id}
                    />
                )}
            </ul>

            {selectedHallScheme.id &&
            <>
                <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в
                    ряду:</p>
                <div className="conf-step__legend">
                    <label className="conf-step__label">Рядов, шт
                        <input
                            name="row"
                            type="text"
                            className="conf-step__input"
                            value={selectedHallScheme.row}
                            onChange={handleChange}
                        />
                    </label>
                    <span className="multiplier">x</span>
                    <label className="conf-step__label">Мест, шт
                        <input
                            name="row_seats"
                            type="text"
                            className="conf-step__input"
                            value={selectedHallScheme.row_seats}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
                <div className="conf-step__legend">
                    <Chair status={"standard"}/> — обычные кресла
                    <Chair status={"vip"}/> — VIP кресла
                    <Chair status={"disabled"}/> — заблокированные (нет кресла)
                    <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
                </div>

                <SeatsScheme rows={selectedHallScheme.row}/>

                <CancelSave
                    cancel={() => dispatch(selectHallScheme({}))}
                    save={() => handleSave()}
                />
            </>
            }
        </div>
    );
}
