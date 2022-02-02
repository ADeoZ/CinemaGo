import {useDispatch, useSelector} from "react-redux";
import Chair from "../Chair";
import {changeSeatStatus} from "../../../../reducers/adminSlice";

export default function SeatsScheme(props) {
    const {seats} = useSelector((state) => state.admin);
    const {rows} = props;
    const dispatch = useDispatch();

    // делим места по рядам
    const seatsInRow = seats.length / rows;
    const seatsByRow = seats.reduce((result, seat, index) => {
        const chunkIndex = Math.floor(index / seatsInRow);
        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }
        result[chunkIndex].push(seat);
        return result
    }, []);

    const handleClick = (id) => {
        // выбираем следующий тип статуса места
        const seatStatus = seats.find((seat) => seat.id === id).status;
        const allStatus = ["standard", "vip", "disabled"];
        const statusIndex = allStatus.indexOf(seatStatus);

        dispatch(changeSeatStatus({id, "status": allStatus[(statusIndex + 1) % allStatus.length]}));
    }

    console.log('- 2.1 render scheme');
    return (
        <div className="conf-step__hall">
            <div className="conf-step__hall-wrapper">
                {seatsByRow.map((row, index) =>
                    <div className="conf-step__row" key={index}>
                        {row.map((seat) =>
                            <Chair
                                status={seat.status}
                                callback={() => handleClick(seat.id)}
                                key={seat.id}
                            />)}
                    </div>
                )}
            </div>
        </div>
    );
}
