import "./App.css";
import { User } from "./User";
import {useEffect, useState} from "react";
import { Text} from "./Text";
import Axios from "axios";

function App() {
    const [generate, setGenerate] = useState("");

    const fetchData = (excuse) => {
      Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).
          then((res) => {
          setGenerate(res.data[0].excuse);
      });
    };

    return (
        <div className= "App">
            <h1>Generate An Excuse</h1>
            <button onClick={() => fetchData("party")}>Party</button>
            <button onClick={() => fetchData("family")}>Family</button>
            <button onClick={() => fetchData("office")}>Office</button>

            <p>{generate}</p>
        </div>
    )
}

export default App;
