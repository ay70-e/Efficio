import {useState} from 'react'

const TasksData = () => {
    const [tasks,setTasks] = useState([
        {
            id: "task1",
            title : "Desgin main page",
            description: "",
            status: 70,
            assignedTo: "u2",
            projectId: "p1",
            teamId: "t1",
            startDate: "2025-09-11",
            dueDate: "2025-09-12",
            timeSpent: 60,
            note: ""
        
        },
            {
            id: "task2",
            title : "Employee page",
            description: "",
            status:50,
            assignedTo: "u1",
            projectId: "p1",
            teamId: "t1",
            startDate: "2025-09-12",
            dueDate: "2025-09-14",
            timeSpent: 48,
            note: ""
        
        },
        {
            id: "task3",
            title : "Desgin login form",
            description: "",
            status: 80,
            assignedTo: "u1",
            projectId: "p1",
            teamId: "t1",
            startDate: "2025-09-11",
            dueDate: "2025-09-12",
            timeSpent: 30,
            note: ""
        
        },
        {
            id: "task4",
            title : "Desgin login form",
            description: "",
            status: 100,
            assignedTo: "u1",
            projectId: "p1",
            teamId: "t1",
            startDate: "2025-09-11",
            dueDate: "2025-09-12",
            timeSpent: 25,
            note: ""
        
        },
        
        {
            id: "task5",
            title : "Desgin login2 form",
            description: "",
            status: 10,
            assignedTo: "u1",
            projectId: "p1",
            teamId: "t1",
            startDate: "2025-09-11",
            dueDate: "2025-09-12",
            timeSpent: 24,
            note: "just a note"
        
        },
         {
            id: "task6",
            title : "Dashboard",
            description: "",
            status: 100,
            assignedTo: "u1",
            projectId: "p1",
            teamId: "t1",
            startDate: "2025-09-11",
            dueDate: "2025-09-12",
            timeSpent: 24,
            note: ""
        
        },
    ])
  return (
    {tasks,setTasks}
  )
}

export default TasksData
