import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../Css/App.css';
import '../Css/NotFound.css'
import LandingPage from "../Sites/LandingPage";
import NotFound from "./NotFound";
import {Detail} from "./Detail";
import {AddKyklop} from "./AddKyklop";
import {Login} from "./Login";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/landingpage" element={<LandingPage/>}/>
                <Route path="addKyklop/" element={<AddKyklop/>}/>
                <Route path="detail/:id" element={<Detail/>}/>
                <Route path="/*/*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
