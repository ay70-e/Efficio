import {useState} from 'react'

const EmployeeData = () => {
    const [users, setUsers] = useState([
        {
        id: "u1",
        name: "Aya Laheb",
        email: "ayalahebjaad@gmail.com",
        password: "efficio",
        role: "employee",
        role1: "Web Developer",
        namber: "07xxxxxxxx",
        teamId: "t1"
        },
        {
        id: "u2",
        name: "Nada",
        email: "nada@gmail.com",
        password: "efficio",
        role: "employee",
        teamId: "t1"
        },
        {
        id: "u3",
        name: "Zain",
        email: "zain@gmail.com",
        password: "efficio",
        role: "manager",
        teamId: "t1"
        },
        {
        id: "u3",
        name: "Abdullah",
        email: "abdullah@gmail.com",
        password: "efficio",
        role: "manager",
        teamId: "t1"
        },

    ])
  return ( {users,setUsers}

  )
}

export default EmployeeData
