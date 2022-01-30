import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainMovie from "./components/CinemaGo/MainMovie";
import MainSeance from "./components/CinemaGo/MainSeance";
import MainBooking from "./components/CinemaGo/MainBooking";
import MainTicket from "./components/CinemaGo/MainTicket";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainMovie/>}/>
                <Route path="seance/:seanceId" element={<MainSeance/>}/>
                <Route path="booking" element={<MainBooking/>}/>
                <Route path="ticket" element={<MainTicket/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
