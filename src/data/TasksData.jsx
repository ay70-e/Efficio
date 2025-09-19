import {useState} from 'react'

const TasksData = () => {
    const [tasks,setTasks] = useState([
        {
            id: "task1",
            title : "Desgin main page",
            description: "",
            status: 100,
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
            assignedTo: "u2",
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
            status: 33,
            assignedTo: "u1",
            projectId: "p1",
            teamId: "t1",
            startDate: "2025-09-11",
            dueDate: "2025-09-12",
            timeSpent: 24,
            note: ""
        
        },
         {
            id: "task1",
            title : "Desgin main page",
            description: "",
            status: 54,
            assignedTo: "u5",
            projectId: "p2",
            teamId: "t2",
            startDate: "2025-09-11",
            dueDate: "2025-09-13",
            timeSpent: 12,
            note: ""
        
        },
        {
            id: "task2",
            title : "Dashboard",
            description: "",
            status: 17,
            assignedTo: "u6",
            projectId: "p2",
            teamId: "t2",
            startDate: "2025-09-11",
            dueDate: "2025-09-15",
            timeSpent: 24,
            note: ""
        
        },
        {
            id: "task1",
            title : "Home page",
            description: "",
            status: 42,
            assignedTo: "u7",
            projectId: "p3",
            teamId: "t3",
            startDate: "2025-09-11",
            dueDate: "2025-09-14",
            timeSpent: 8,
            note: ""
        
        },
         {
            id: "task2",
            title : "Game cards",
            description: "",
            status: 62,
            assignedTo: "u7",
            projectId: "p3",
            teamId: "t3",
            startDate: "2025-09-11",
            dueDate: "2025-09-16",
            timeSpent: 22,
            note: ""
        
        },
         {
            id: "task3",
            title : "score board",
            description: "",
            status: 79,
            assignedTo: "u8",
            projectId: "p3",
            teamId: "t3",
            startDate: "2025-09-11",
            dueDate: "2025-09-16",
            timeSpent: 16,
            note: ""
        
        },
         {
            id: "task1",
            title : "Movies page",
            description: "",
            status: 83,
            assignedTo: "u9",
            projectId: "p4",
            teamId: "t4",
            startDate: "2025-09-11",
            dueDate: "2025-09-18",
            timeSpent: 30,
            note: ""
        
        },
         {
            id: "task2",
            title : "login form",
            description: "",
            status: 88,
            assignedTo: "u10",
            projectId: "p4",
            teamId: "t4",
            startDate: "2025-09-11",
            dueDate: "2025-09-12",
            timeSpent: 8,
            note: ""
        
        },
         {
            id: "task1",
            title : "Airline table",
            description: "",
            status: 98,
            assignedTo: "u11",
            projectId: "p5",
            teamId: "t5",
            startDate: "2025-09-11",
            dueDate: "2025-09-13",
            timeSpent: 14,
            note: ""
        
        },
         {
            id: "task2",
            title : "Book ticket form",
            description: "",
            status: 88,
            assignedTo: "u12",
            projectId: "p5",
            teamId: "t5",
            startDate: "2025-09-11",
            dueDate: "2025-09-17",
            timeSpent: 8,
            note: ""
        
        },
         {
            id: "task1",
            title : "Home page",
            description: "",
            status: 76,
            assignedTo: "u13",
            projectId: "p6",
            teamId: "t6",
            startDate: "2025-09-11",
            dueDate: "2025-09-14",
            timeSpent: 8,
            note: ""
        
        },
         {
            id: "task2",
            title : "contact page",
            description: "",
            status: 22,
            assignedTo: "u14",
            projectId: "p6",
            teamId: "t6",
            startDate: "2025-09-11",
            dueDate: "2025-09-19",
            timeSpent: 7,
            note: ""
        
        },

    ])
  return (
    {tasks,setTasks}
  )
}

export default TasksData
