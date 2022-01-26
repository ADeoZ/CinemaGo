import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CinemaGo from "./components/CinemaGo/CinemaGo";
import MainSeance from "./components/CinemaGo/MainSeance";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CinemaGo/>}/>
                <Route path="hall/:seanceId" element={<MainSeance/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
