import {useState} from 'react'        

const ProjectData = () => {
  const [projects, setProjects] = useState([
    {
      id: 'p1',
      name: 'Efficio',
      description: 'A management website to organize and monitor company tasks and projects',
      startDate: "2025-09-10",
      endDate: "2025-09-19",
      managerId: "u3",
      teamId: "t1"
    },
    {
      id: 'p2',
      name: 'Stock & crypto platform',
      description: 'Frontend development for an interactive stock and crypto tracking and analysis platform',
      startDate: "2025-09-10",
      endDate: "2025-09-19",
      managerId: "u4",
      teamId: "t2"
    },
     {
      id: 'p3',
      name: 'Game platform',
      description: 'Front-end development of a gaming platform',
      startDate: "2025-09-10",
      endDate: "2025-09-19",
      managerId: "u3",
      teamId: "t3"
    },
     {
      id: 'p4',
      name: 'Movie platform',
      description: 'Front-end development for a movies platform',
      startDate: "2025-09-10",
      endDate: "2025-09-19",
      managerId: "u3",
      teamId: "t4"
    },
     {
      id: 'p5',
      name: 'Flight system',
      description: 'Front-end development for the flight system platform',
      startDate: "2025-09-10",
      endDate: "2025-09-19",
      managerId: "u3",
      teamId: "t5"
    },
     {
      id: 'p6',
      name: 'Car Garage Management',
      description: 'Front-end development for a Car Garage Management platform',
      startDate: "2025-09-10",
      endDate: "2025-09-19",
      managerId: "u3",
      teamId: "t6"
    },
  ])
  return (
    {projects, setProjects}
  )
}

export default ProjectData
