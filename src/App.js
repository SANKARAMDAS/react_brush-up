import "./App.css";
import { User } from "./User";
import { useState} from "react";
import { Text} from "./Text";

function App() {
    const [showText, setShowText] = useState(false);
    return (<div className="App">
        <button onClick={() => {
        setShowText(!showText);
        }}>
            Press</button>
        {showText && <Text />}
    </div>)
}

export default App;
