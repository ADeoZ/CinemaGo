import {useSelector} from "react-redux";
import SeanceHallSeat from "../../../Client/MainSeance/SeanceHall/SeanceHallSeat";
import Chair from "../Chair";

export default function SeatsScheme(props) {
    const {seats} = useSelector((state) => state.admin);
    const {rowSeats} = props;

    const seatsInRow = seats.length / rowSeats;
    // делим места по рядам
    const seatsByRow = seats.reduce((result, seat, index) => {
        const chunkIndex = Math.floor(index / seatsInRow);
        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }
        result[chunkIndex].push(seat);
        return result
    }, []);

    console.log(seats);
    return (
        <div className="conf-step__hall">
            <div className="conf-step__hall-wrapper">
                {seatsByRow.map((row, index) =>
                    <div className="conf-step__row" key={index}>
                        {row.map((seat) =>
                            <Chair
                                type={seat.status}
                                key={seat.id}
                            />)}
                    </div>
                )}
            </div>
        </div>
    );
}
