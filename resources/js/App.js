import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainMovie from "./components/CinemaGo/MainMovie";
import MainSeance from "./components/CinemaGo/MainSeance";
import MainBooking from "./components/CinemaGo/MainBooking";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainMovie/>}/>
                <Route path="hall/:seanceId" element={<MainSeance/>}/>
                <Route path="booking" element={<MainBooking/>}/>
                <Route path="ticket" element={<MainMovie/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
