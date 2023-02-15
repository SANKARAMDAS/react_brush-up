import "./App.css";
import { User } from "./User";
import {useEffect, useState, createContext} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {HomePage} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Contact} from "./pages/Contact";
import {Navbar} from "./Navbar";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export const AppContext = createContext();
function App() {
   const client = new QueryClient({
       defaultOptions: {
           queries: {
               refetchOnWindowFocus: false,
           }
       }
   });
    return (
        <div className= "App">
            <QueryClientProvider client={client}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='*' element={<h1>The page you are looking for not found.</h1>}/>
                </Routes>
            </Router>
            </QueryClientProvider>
        </div>
    )
}

export default App;
