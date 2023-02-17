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
import {Person} from "./component/Person";

function App() {
    return (
        <div className="App">
            <Person
               name="San.D"
               email="sand@xyz.com"
               age={21}
               isMarried={false}
               friends={["jessica","jake","jerry","jasmine"]}
            />
        </div>
    )
}

export default App;
