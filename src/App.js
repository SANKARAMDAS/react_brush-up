import "./App.css";
import { User } from "./User";
import {useEffect, useState, createContext} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {HomePage} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Contact} from "./pages/Contact";
import {Navbar} from "./Navbar";

export const AppContext = createContext();
function App() {
    const [username, setUsername] = useState("San.D");
    return (
        <div className= "App">
            <AppContext.Provider value={{username, setUsername}}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='*' element={<h1>The page you are looking for not found.</h1>}/>
                </Routes>
            </Router>
            </AppContext.Provider>
        </div>
    )
}

export default App;
