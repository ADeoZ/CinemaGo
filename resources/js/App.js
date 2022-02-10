import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainMovie from "./components/Client/MainMovie";
import MainSeance from "./components/Client/MainSeance";
import MainBooking from "./components/Client/MainBooking";
import MainTicket from "./components/Client/MainTicket";
import Admin from "./components/Admin/Admin";
import Login from "./components/Admin/Login";
import AuthRequired from "./components/Admin/AuthRequired";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainMovie/>}/>
                <Route path="seance/:seanceId" element={<MainSeance/>}/>
                <Route path="booking" element={<MainBooking/>}/>
                <Route path="ticket" element={<MainTicket/>}/>
                <Route path="admin/login" element={<Login/>}/>
                <Route
                    path="admin"
                    element={
                        <AuthRequired>
                            <Admin/>
                        </AuthRequired>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
