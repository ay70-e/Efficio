import React from "react";
import Navbar from "../components/navbar";
import useEmployeeData from "../data/EmployeeData";
import useProjectData from "../data/ProjectData";
import useTasksData from "../data/TasksData";

const TaskCard = ({ task, project }) => (
  <div >
    <p className="text-gray-500">{task.startDate}</p>
    <h3 className="text-lg font-semibold">{task.title}</h3>
    <p><strong>Project:</strong> {project?.name || "There is no project now"}</p>
    <p><strong>Status:</strong> {task.status}</p>
    <p><strong>Due:</strong> {task.dueDate}</p>
    <p><strong>Time Spent:</strong> {task.timeSpent} hrs</p>
    {task.note && <p><strong>Note:</strong> {task.note}</p>}
  </div>
);


const ProjectsDashboard = () => {
  const { users } = useEmployeeData();
  const { projects } = useProjectData();
  const { tasks } = useTasksData();

  const currentUserId = "u1"; // Simulated login
  const currentUser = users?.find(user => user.id === currentUserId);

  if (!currentUser) return <p className="p-6 text-red-600">User not found.</p>;

  const myTasks = tasks?.filter(task => task.assignedTo === currentUserId) || [];

  return (
     <div>
     <Navbar />
    
    <div className="pt-20 flex min-h-screen ">
      
      {/* Sidebar with Employee Info */}
      <aside className="w-72 bg-white shadow-md p-6 border-r border-gray-200 rounded-r-2xl ">
         {/* Employee Info */}
       <div
          className="bg-[#FFB7B2] shadow-md rounded-2xl p-6 text-center mb-6 
            hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300" >
        <div className="flex flex-col items-center mb-6  gap-4">
          
         <img src="/imges/profile.png" alt="User avatar" className="w-20 h-20 rounded-full border" />
        <div className="space-y-2 text-black">
          
          <p>{currentUser.name}</p>
          <p> {currentUser.role1}</p>
        </div>
        </div>
         <p className="flex items-center text-[14px] gap-2 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25zM3 6.75l9 6 9-6"
              />
            </svg>
            {currentUser.email}
          </p>
       
         <p className="flex items-center gap-2 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75a16.5 16.5 0 0014.5 14.5l3-3a1.5 1.5 0 00-.375-2.475l-4.125-2.25a1.5 1.5 0 00-1.875.375l-1.125 1.125a12.75 12.75 0 01-6.375-6.375l1.125-1.125a1.5 1.5 0 00.375-1.875L4.725 3.375A1.5 1.5 0 002.25 3.75v3z"
              />
            </svg>
            {currentUser.namber}
          </p>

          
          
         
        </div>
         {/* Employee  */}
          <div
          className="bg-[#B8C480] shadow-md rounded-2xl p-6 text-center mb-6
            hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300" >
        <div className="flex flex-col items-center mb-6  gap-4">
          
         <img src="/avatar.png" alt="User avatar" className="w-20 h-20 rounded-full border" />
        <div className="space-y-2 text-black">
          
          <p>{currentUser.name}</p>
          <p> {currentUser.role1}</p>
        </div>
        </div>
         <p className="flex items-center text-[14px] gap-2 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25zM3 6.75l9 6 9-6"
              />
            </svg>
            {currentUser.email}
          </p>
       
         <p className="flex items-center gap-2 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75a16.5 16.5 0 0014.5 14.5l3-3a1.5 1.5 0 00-.375-2.475l-4.125-2.25a1.5 1.5 0 00-1.875.375l-1.125 1.125a12.75 12.75 0 01-6.375-6.375l1.125-1.125a1.5 1.5 0 00.375-1.875L4.725 3.375A1.5 1.5 0 002.25 3.75v3z"
              />
            </svg>
            {currentUser.namber}
          </p>

          
          
         
        </div>
      </aside>

  {/* Main Content with Task Cards */}
  <main className="flex-1 ">
   <section className="grid md:grid-cols-1 gap-4 max-w-6xl mx-auto px-8  p-0 ">
         <div
          className="flex  md:flex-row items-center justify-between px-8 ">

        <div className="max-w-lg ">
          <p className="text-[16px] font-bold text-gray-900">Hi, {currentUser.name}</p>
          <p className="text-[12px] mb-0 font-medium text-[#B8C480]">
            Let's start your day with a smile!
          </p>
       </div>
                      <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 17.25h-4.5m2.25-13.5a6 6 0 0 0-6 6v3.75a2.25 2.25 0 0 1-.75 1.687l-.75.563a.75.75 0 0 0 .75 1.25h13.5a.75.75 0 0 0 .75-1.25l-.75-.563a2.25 2.25 0 0 1-.75-1.687V9a6 6 0 0 0-6-6Z"
                />
              </svg>
      </div>

         <div
          className=" shadow-md rounded-2xl p-0 
           bg-[#FFD972] flex  md:flex-row items-center justify-between px-8 ">

        <div className="max-w-lg ">
          <h2 className="text-4xl font-extrabold mb-4">
            Today Task
          </h2>
          <p className="text-lg mb-6 font-medium">
            Check your daily tasks and schedules.
          </p>
          <button 
          className="bg-[#FFB7B2] px-6 py-2 rounded-lg font-medium shadow
              hover:shadow-lg hover:scale-105 active:scale-95 transition duration-300">
            Today's schedule
          </button>
        </div>

        <div className=" max-w-lg mt-0 md:mt-0">
          <img
            data-aos="fade-left"
            src="..\imges\profile.png"
            alt="Team working"
            className="w-[200px]"
          />
        </div>
  
      </div>

              <div className="flexed md:flex-row items-center justify-between px-0">
          <section className="grid md:grid-cols-3 gap-3 max-w-6xl mx-auto px-1">
            {myTasks.length === 0? (
              <div  >
                <p className="text-gray-600">No tasks assigned.</p>
              </div>
              ) : (
                myTasks.map(task => {
                  const project = projects?.find(proj => proj.id === task.projectId);
                            return (
                    <div
                      key={task.id}
                      className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300"
                    >
                      <TaskCard task={task} project={project} />
                    </div>
                  );
                })
    )}
  </section>
</div>


       
        
      </section>
  </main>
 

</div>
  </div>
  )
}

export default ProjectsDashboard
