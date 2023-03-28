import { useState, useRef } from "react";
import  "./AddTask.css";

export const AddTask = ({ tasks, setTasks}) => {


    const [progress, setProgress] = useState(false);
    const taskRef = useRef("");

    const handleReset = () => {
        taskRef.current.value = "";
        setProgress(false);
    }
   
    const handleSubmit = (event) => {
      event.preventDefault();
      const task = {
        id: Math.floor(Math.random() * 10000),
        name: taskRef.current.value,
        completed: Boolean(progress),
      }
      setTasks ([...tasks, task]);
      handleReset();
      setProgress(false);
    }


  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}>
        <input ref={taskRef}  name="taskname" id="taskname" placeholder="Task Name" autoComplete="off" />
        <select onChange={(e)=>setProgress(e.target.value)} value={progress}>
          <option value={false} >Pending</option>
          <option value={true}>Completed</option>
        </select>
        <span className="reset" onClick={handleReset} >Reset</span>
        <button  type="submit">Add Task</button>
        
    </form>
    <p>{taskRef.current.value}</p>

    </section>
  )
}
