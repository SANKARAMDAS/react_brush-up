import "./App.css";
import { User } from "./User";
import {useEffect, useState} from "react";
import { Text} from "./Text";
import Axios from "axios";

function App() {
    const [catFact, setCatFact] = useState("");
    // fetch("https://catfact.ninja/fact")
    //     .then((res) => res.json()).then((data) => {
    //     console.log(data);
    // });
    const factCheck = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact);
        });
    };
    useEffect(() => {
        return () => {
           factCheck();
        };
    }, []);

    return (
        <div className="App">
            <button onClick={factCheck}> Generate Cat Fact </button>
            <p>{catFact}</p>
        </div>
    )
}

export default App;
