import "./App.css";
import { User } from "./User";
import { useState} from "react";

function App() {
    // const [age, setAge] = useState(0);
    // const increaseAge = () => {
    //     setAge(age +1);
    //     console.log(age);
    // };

    // const [inputValue, setInputValue] = useState("");
    // const handleInputChange = (event) => {
    //     setInputValue(event.target.value);
    // }

    // const [showText, setShowText] = useState(false);

    // const [textColor, setTextColor] = useState("blue");

    const [count, setCount] = useState(0);

    const increaseNumber = () => {
        setCount(count + 1);
    }

    const decreaseNumber = () => {
      setCount(count - 1);
    }

    const resetNumber = () => {
        setCount(0);
    }
    return (
        <div className="App">
            <button onClick={increaseNumber}>Increase</button>
            <button onClick={decreaseNumber}>Decrease</button>
            <button onClick={resetNumber}>Set to Zero</button>
            {count}

            {/*<button onClick={() => {setTextColor(textColor === 'blue' ?"red" : 'blue')}}>Show/Hide</button>*/}
            {/*<h1 style={{color: textColor}}> My name is San.D</h1>*/}

            {/*<button onClick={() => {setShowText(!showText)}}>Show/Hide</button>*/}
            {/*{ showText === true && <h1> My name is San.D</h1>}*/}


            {/*<input type="text" onChange={handleInputChange}/>*/}
            {/*{inputValue}*/}

            {/*{age}*/}
            {/*<button onClick={increaseAge}>Increase the Age</button>*/}
        </div>
    );
}

export default App;
