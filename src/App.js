import "./App.css";

function App() {
    const age = 17;
    const isGreen = true;

  return (
      //Ternary  Operator
    <div className="App">
        {age <= 18 ? <h1> Under Age </h1> : <h1> Over Age</h1>}
        <h1 style={{color: isGreen ? "green" :"red"}}>This has color</h1>
    </div>
  );
}
export default App;
