import "./App.css";
import { User } from "./User";
import {useEffect, useState, createContext} from "react";
import {BrowserRouter as Router, Routes, Route, Link,} from "react-router-dom";
import {HomePage} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Contact} from "./pages/Contact";
import {Navbar} from "./Navbar";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Form} from "./component/Form";
import {useToggle} from "./useToggle";

function App() {
    const [isVis, toggle] = useToggle();
    const [isVis2, toggle2] = useToggle();
    return (
        <div className= "App">
            <button onClick={toggle}>
                {isVis ? 'Hide' : 'Show'}
            </button>
            {isVis && <h1>Hide Text</h1>}

            <button onClick={toggle2}>
                {isVis2 ? 'Hide' : 'Show'}
            </button>
            {isVis2 && <h1>Hide Text</h1>}
        </div>
    )
}

export default App;
