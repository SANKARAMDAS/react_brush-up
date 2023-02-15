import "./App.css";
import { User } from "./User";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {HomePage} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Contact} from "./pages/Contact";
import {Navbar} from "./Navbar";

function App() {

    return (
        <div className= "App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/menu' element={<Menu />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='*' element={<h1>The page you are looking for not found.</h1>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
