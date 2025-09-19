import {useState} from 'react'        

const ProjectData = () => {
  const [projects, setProjects] = useState([
    {
      id: 'p1',
      name: 'Efficio',
      description: 'Devlop frontend project manager website',
      startDate: "2025-09-10",
      endDate: "2025-09-19",
      managerId: "u3",
      teamId: "t1"
    },
    {
      id: 'p2',
      name: '',
      description: '',
      startDate: "2025-09-10",
      endDate: "2025-09-19",
      managerId: "u4",
      teamId: "t1"
    },
  ])
  return (
    {projects, setProjects}
  )
}

export default ProjectData
