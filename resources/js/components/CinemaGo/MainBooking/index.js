import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import CinemaGo from "../CinemaGo";
import TicketHeader from "../TicketHeader";
import Button from "../Button";
import BookingInfo from "./BookingInfo";

export default function MainBooking() {
    const {session, ticket} = useSelector((state) => state.seance);
    const navigate = useNavigate();

    useEffect(() => {
        if (!session.id || !ticket.seanceId) {
            navigate(-1);
        }
    }, []);

    const submitHandle = () => {
        console.log('submit');
    }

    return (
        <CinemaGo>
            <section className="ticket">
                <TicketHeader text={"Вы выбрали билеты:"}/>
                <div className="ticket__info-wrapper">
                    <BookingInfo/>
                    <Button text={"Получить код бронирования"} link={"/ticket"} callback={submitHandle}/>
                </div>
            </section>
        </CinemaGo>
    );
}
