import {useSelector} from "react-redux";
import classNames from "classnames/bind";

export default function SeanceHall() {
    const {session, seats} = useSelector((state) => state.seance);

    const seatByRow = seats.reduce((res, seat, index) => {
        const chunkIndex = Math.floor(index/perChunk)

        if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, []);
    // console.log(seats);
    // {index % (seats.length / session.row) === 0 && <div className="buying-scheme__row">}
    //     {index % (seats.length / session.row) === ((seats.length / session.row) - 1) && </div>}
    return (
        <div className="buying-scheme">
            <div className="buying-scheme__wrapper">
                {seats.map((seat, index) =>
                    <>
                        <span className={classNames(
                            "buying-scheme__chair",
                            {
                                "buying-scheme__chair_disabled": seat.status === "disabled",
                                "buying-scheme__chair_standard": seat.status === "standard",
                                "buying-scheme__chair_vip": seat.status === "vip",
                            }
                        )}
                              key={seat.id}
                        />
                    </>
                )}
            </div>
            <div className="buying-scheme__legend">
                <div className="col">
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_standart"/> Свободно (<span
                        className="buying-scheme__legend-value">{session.price_standard}</span>руб)</p>
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_vip"/> Свободно VIP (<span
                        className="buying-scheme__legend-value">{session.price_vip}</span>руб)</p>
                </div>
                <div className="col">
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_taken"/> Занято</p>
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_selected"/> Выбрано</p>
                </div>
            </div>
        </div>
    )
        ;
}
