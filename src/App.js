function App() {
  return (
    <div className="App">
        <Component name="San.D" age={21} email="testing1@abc.com"/>
        <Component name="SanD" age={20} email="testing2@abc.com"/>
        <Component name="Sand" age={22} email="testing3@abc.com"/>
    </div>
  );
}

//using props we can pass everything to another component.
const Component = (props) => {
   return (
       <div>
          <h1> {props.name}</h1>
           <h1> {props.age}</h1>
           <h1> {props.email}</h1>
       </div>
   )
}

export default App;
