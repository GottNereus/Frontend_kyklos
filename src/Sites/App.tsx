import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../Css/App.css';
import '../Css/NotFound.css'
import LandingPage from "../Sites/LandingPage";
import NotFound from "./NotFound";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/*/*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
