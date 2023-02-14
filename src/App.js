import "./App.css";
import { User } from "./User";
import { useState} from "react";

function App() {
    const [list, setList] = useState([]);
    const [task, setTask] = useState("");

    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const addTask = () => {
        const task = {
            id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
            taskName: task,
        }
      setList([...list, task]);
    }
    
    const deleteTask = (id) => {
      const newTodoList = list.filter((task)=> {
        return task.id !== id;
      });
      setList(newTodoList);
    }

    return (
        <div className="App">
           <div className="addTask">
               <input onChange={handleChange}/>
               <button onClick={addTask}> Add Task</button>
           </div>
            <div className="list">
                {list.map((task) => {
                    return <div>
                        <h1>{task.taskName}</h1>
                        <button onClick={() => deleteTask(task.id)}> X </button>
                    </div>
                })}
            </div>

        </div>
    );
}

export default App;
