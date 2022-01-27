import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainMovie from "./components/CinemaGo/MainMovie";
import MainSeance from "./components/CinemaGo/MainSeance";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainMovie/>}/>
                <Route path="hall/:seanceId" element={<MainSeance/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
