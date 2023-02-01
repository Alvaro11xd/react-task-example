// creando contexto
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/Tasks";


// nombre del contexto
export const TaskContext = createContext();

// componente que engloba a todos los componentes
export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task){
        setTasks([...tasks, {
          title:task.title,
          id:tasks.length,
          description:task.description
        }])
      }

      function deleteTask(taskId){
        setTasks(tasks.filter(task => task.id != taskId))
      }
    
      useEffect(() => {
        setTasks(data);
      }, []);

    return (
        // creando el componente global
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>{props.children}</TaskContext.Provider>
    );
}
