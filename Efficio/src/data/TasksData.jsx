import {useState} from 'react'

const TasksData = () => {
    const [tasks,setTasks] = useState([
        {
            id: "task1",
            title : "Desgin main page",
            description: "",
            status: "in-progress",
            assignedTo: "u2",
            projectId: "p1",
            teamId: "t1",
            startDate: "2025-09-11",
            dueDate: "2025-09-12",
            timeSpent: 1,
            note: ""
        
        },
            {
            id: "task2",
            title : "Desgin login form",
            description: "",
            status: "done",
            assignedTo: "u1",
            projectId: "p1",
            teamId: "t1",
            startDate: "2025-09-11",
            dueDate: "2025-09-12",
            timeSpent: 1,
            note: ""
        
        },
    ])
  return (
    {tasks,setTasks}
  )
}

export default TasksData
