import "./App.css";
import { User } from "./User";

function App() {
    //list/array
    // const names = ['San.D','Pedro','Jessica','Jerry','Tom','Jack'];
    // return <div className="App">
    //     {names.map((name,key) => (
    //         <h1>
    //             {name}
    //         </h1>
    //     ))}
    // </div>
    const users = [
        { name: 'Jack', age: 21},
        { name: 'Jerry', age: 12},
        { name: 'Tom', age: 23},
    ];

    return <div className="App">
        {users.map((user, key) => {
            return (
                <User name={user.name} age={user.age}/>
            )
        })}
    </div>
}


export default App;
