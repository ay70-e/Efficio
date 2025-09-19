import React from "react";
import { useState,forwardRef , useRef } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/navbar";
import EmployeeTable from "../components/EmployeeTable";
import useEmployeeData from "../data/EmployeeData";
import useProjectData from "../data/ProjectData";
import useTasksData from "../data/TasksData";
import { Calendar } from "../components/ui/calendar";
import { Progress } from "../components/ui/progress";
import { Checkbox } from "../components/ui/checkbox";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "@/components/ui/alert-dialog";
import TasksData from "../data/TasksData";

import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";



{/*==============================================================================================================*/}


const ProjectsDashboard = () => {
  const { id } = useParams();

  const { users } = useEmployeeData();
  const { projects } = useProjectData();
  const { tasks } = useTasksData();


 const project = projects?.find(p => p.id === id) || null;
  const [query, setQuery] = useState("");

const handleSelectTask = (taskId) => {
  setSelectedTask(tasks.find(t => t.id === taskId));

  const ref = taskRefs.current[taskId];
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};
const [showList, setShowList] = useState(false);

   


  const handleSelect = (task) => {
    setQuery(task.title);       // Fill input with selected task title
    setShowList(false);         // Hide dropdown list
    setSelectedTask(task);
    
  setShowList(false); // hide dropdown after selection      // Store selected task for later use
  };



  const manager = users?.find(u => u.id === project?.managerId);
  const employee = users?.filter(u => u.teamId === project?.teamId) || [];

  const projectTasks = tasks?.filter(t => t.projectId === project?.id) || [];
const taskRefs = useRef({});
tasks.forEach(task => {
  if (!taskRefs.current[task.id]) {
    taskRefs.current[task.id] = React.createRef();
  }
});
  const totalProgress =
  projectTasks.length > 0
    ? Math.round(
        projectTasks
          .filter(task => typeof task.status === "number")
          .reduce((sum, task) => sum + task.status, 0) / projectTasks.length
      )
    : 0;


const myTasks = projectTasks; 
const chartDataset = projectTasks.map(task => ({
  title: task.title,
  progress: task.status,
  timeSpent: task.timeSpent || 0,
}));



const TaskCard =  forwardRef(({ task, project, isSelected }, ref) => {
  const cardStyle = isSelected
    ? " "
    : "";
console.log("myTasks:", myTasks);
console.log("chartDataset:", chartDataset);
console.log("project.managerId:", project?.managerId);
console.log("All assignedTo values:", tasks.map(t => t.assignedTo));
console.log("Rendering task:", task.title);
  return (
     <div
      ref={ref}
      className={`relative overflow-hidden transition-all duration-300 ease-in-out group p-4 rounded-lg ${
        isSelected ? "bg-[#FFD972]  rounded-2xl" : ""
      }`}
    >

    <div className={`relative  overflow-hidden  transition-all duration-300 ease-in-out group p-0 pt-0 h-[100px] hover:h-auto ${cardStyle}`}>
     
      <div
  className="relative overflow-hidden transition-all duration-300 ease-in-out group p-0 pt-0 max-h-[120px] group-hover:max-h-[1000px] cursor-pointer"
  onClick={() => handleSelectTask(task.id)}
></div>
 {/* Essentials always visible */}
      <div>
        <p className="text-gray-400">{task.startDate}</p>
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <div className="mt-1 pb-1">
          <Progress
            value={task.status}
            className="bg-gray-200 [&>div]:bg-[#B8C480] [&>div]:rounded-full h-2"
          />
        </div>
        <hr className="mt-1 pb-1 border-gray-400" />
        <div className="flex justify-between text-gray-400 ">
          <p>
            <strong className="text-black">Due:</strong> {task.dueDate}
          </p>
          <p>{task.timeSpent} hrs</p>
        </div>
      </div>

      {/* Hidden details revealed on hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 space-y-4 text-sm text-gray-700">

  {/* Project Name */}
  <div>
    <p className="text-[16px] font-bold text-black">📁 Project Name</p>
    <p>{project?.name || "There is no project currently"}</p>
    <hr className="mt-2 border-gray-300" />
  </div>

  {/* Description */}
  <div>
    <p className="text-[16px] font-bold text-black">📝 Task Description</p>
    <p>{task.description || "No description available"}</p>
    <hr className="mt-2 border-gray-300" />
  </div>

  {/* Team Members */}
  <div>
    <p className="text-[16px] font-bold text-black">👥 Team Members</p>
    {employee?.length > 0 ? (
      <ol className="list-decimal list-inside space-y-1">
        {employee.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ol>
    ) : (
      <p className="text-gray-400">No team members assigned</p>
    )}
    <hr className="mt-2 border-gray-300" />
  </div>

  {/* Notes */}
  <div>
    <p className="text-[16px] font-bold text-black">🗒️ Notes</p>
    <p>{task.note || <span className="text-gray-400">No notes added</span>}</p>
    <hr className="mt-2 border-gray-300" />
  </div>

</div>
    </div></div>
  );
});


       
 

  const [allTasks, setAllTasks] = React.useState(projectTasks);
  const [mTasks, setMyTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState({ title: "", startDate: "", status: 0 });
  const [selectedTask, setSelectedTask] = React.useState(null);
  const [showAlert, setShowAlert] = React.useState(false);
  const tasksRef = React.useRef(null);
  const [date, setDate] = React.useState(new Date());
 if (!users || !projects || !tasks) return <div>Loading...</div>;
  if (!project) return <p className="p-6 text-red-600">Project not found.</p>;


  const tasksNotStarted = allTasks.filter(t => t.status === 0);
  const tasksInProgress = allTasks.filter(t => t.status > 0 && t.status < 100);
  const tasksCompleted = allTasks.filter(t => t.status === 100);
 
const filteredTasks = tasks?.filter(t =>
    t.title.toLowerCase().includes(query.toLowerCase()));


  return (
    <div>
      <Navbar />
  

        <div  className="pt-20 flex min-h-screen ">   

          {/* Sidebar */}
          <aside className="w-72 bg-white shadow-md p-6 border-r border-gray-200 rounded-r-2xl">
            <div className="bg-[#FFB7B2] shadow-md rounded-2xl p-6 text-center mb-6 hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300">
              <div className="flex flex-col items-center mb-1 gap-4">
                <div className="space-y-2 text-black">
                  <h2 className="text-2xl font-extrabold mb-0">{project?.name}</h2><br></br>
                  <p className="text-gray-700 font-semibold text-start ">Project Leader: </p>
                  <p  className="text-gray-900"> {manager?.name || "N/A"} </p>
                
                </div>
              </div>
                <hr  className="mt-1 pb-1 border-gray-400"></hr>
              <p className="text-gray-700 font-semibold mt-2 text-start ">Project Progress:</p>
               <div className="mt-2">
               
                 <Progress
                    value={totalProgress}
                    className="h-3 rounded-full bg-[#a2ad70b3] [&>div]:bg-[#B8C480]"
                  />
              </div>
              
              <div className="mt-2">
              
                <p className="text-gray-700 font-semibold text-start  ">Deadline: <span className="text-gray-900 ">{project.endDate}</span></p>
             
              </div>
             
            </div>

            <div className="flex flex-col items-center mb-0 gap-4">
              <Calendar mode="single" selected={date} onSelect={setDate} 
                className="bg-[#B8C480] shadow-md rounded-2xl p-2 text-center mb-3
                hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300" 
              />
            </div>

            <div className="bg-[#FFD972] shadow-md rounded-2xl p-3 text-center hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setMyTasks([...mTasks, newTask]);
                  setNewTask({ title: "", startDate: "", status: 0 });
                }}
                className="space-y-2"
              >
                <p>Add your Tasks</p>
                <input
                  type="text"
                  placeholder="Task title"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="border p-2 w-full text-sm rounded-lg border-black"
                />
                <input
                  type="date"
                  value={newTask.startDate}
                  onChange={(e) => setNewTask({ ...newTask, startDate: e.target.value })}
                  className="border p-2 rounded-lg w-full text-sm border-black"
                />
                <input
                  type="number"
                  min={0} max={100} placeholder="Progress %"
                  value={newTask.status}
                  onChange={(e) => {
                    let value = Number(e.target.value);
                    if (value < 0) value = 0;
                    if (value > 100) value = 100;
                    setNewTask({ ...newTask, status: value });
                  }}
                  className="border p-2 rounded-lg border-black w-full text-sm"
                />
                <button type="submit"
                  className="relative w-full py-2 px-4 mb-2 me-2 overflow-hidden text-sm font-medium text-[#080808] rounded-2xl z-10
                    bg-gradient-to-br from-[#FFB7B2] to-[#FFB7B2] transition-colors duration-300
                    group hover:text-white"
                >
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#b8c480] to-[#b8c480] z-0 transition-all duration-700 ease-in-out group-hover:h-full rounded-2xl"></span>
                  <span className="relative z-10">submit</span>
                </button>
              </form>
              
            </div>





          </aside>
          <main className="flex-1 ">

        {/* Header */}
        <section className="grid md:grid-cols-1 gap-4 max-w-6xl mx-auto px-8  p-0 ">
       
         
          <div
          className="flex  md:flex-row items-center justify-between px-8 ">

        <div className="max-w-lg ">
          <p className="text-[16px] font-bold text-gray-900">Hi, guys</p>
          <p className="text-[12px] mb-0 font-medium text-[#B8C480]">
           Teamwork makes the dream work!
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

          {/* Yellow Box */}
          <div className="bg-[#FFD972] shadow-md rounded-2xl p-2  flex items-center justify-between">
            {/* Left Side: Search + Stats + Button */}
             <div className=" flex-1">
    
      


              {/* Stats */}
              <div className="flex justify-between mb-8 ">
                <div className="text-center">
                  <p className="font-bold text-lg">{tasksNotStarted.length}</p>
                  <p className="text-xs text-gray-600">Not Started</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg">{tasksInProgress.length}</p>
                  <p className="text-xs text-gray-600">In Progress</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg">{tasksCompleted.length}</p>
                  <p className="text-xs text-gray-600">Completed</p>
                </div>
              </div>

        <div className="mb-4 mr-4 grid grid-cols-2 ">
      <input
        type="text"
        placeholder="Search tasks..."
        className="w-[320px] border px-2xl p-1 h-[30px] rounded-lg text-sm border-black"
        value={query}
        onChange={e => {
          setQuery(e.target.value); // Update query
          setShowList(true);
          setSelectedTask(null); 
        }}
     
      />
      
    {/* 🆕 Dropdown list of matching tasks */}
      {showList && filteredTasks?.length > 0 && (
        <ul className="absolute z-10 w-80 bg-white border border-gray-300 rounded-lg mt-7 max-h-60 overflow-y-auto shadow-md">
          {filteredTasks.map(task => (
            <li
              key={task.id}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(task)} // 🆕 Select task on click
            >
              {task.title}

   
            </li>
          ))}
 </ul>
      )}

      {showList && filteredTasks?.length === 0 && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 p-2  text-sm text-red-500 shadow-md">
          No matching tasks found.
        </div>
      )}
      
    {/* Button */}
              <div className="text-center">
<button
  disabled={!selectedTask}
  className={`bg-[#FFB7B2] px-2 h-[30px] text-center rounded-lg font-medium shadow transition duration-300 ${
    selectedTask
      ? "hover:shadow-lg hover:scale-105 active:scale-95"
      : "opacity-50 cursor-not-allowed"
  }`}
  onClick={() => selectedTask && handleSelectTask(selectedTask.id)}
>
  View
</button>
              </div>
 </div>

            </div>
 
       
            {/* Right Side: SVG Image */}
           <div className=" max-w-lg mt-0 md:mt-0">
          <img
            data-aos="fade-left"
            src="..\imges\Illustration project .svg"
            alt="Team working"
            className="w-[200px]"
          />
        </div>
        
          </div>
     
{/*==============================================================================================================*/}  
  {/*    Carousel with Task Cards */}
{/*==============================================================================================================*/}      

 <div className="flexed md:flex-row items-center justify-between px-4">
  <section className="grid  gap-3 max-w-6xl mx-auto px-4 h-6xl ">
    {myTasks.length === 0 ? (
      <div>
        <p className="text-gray-600">No tasks assigned.</p>
      </div>
    ) : (
    <Carousel className=" w-full ">
  <CarouselContent>
    {myTasks.map(task => {
     
      return (
        <CarouselItem key={task.id} className="md:basis-1/2 pt-3 ">
          <div
            className="bg-white shadow-md rounded-4xl p-6  hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300"
          >
                      <TaskCard
              key={task.id}
              task={task}
              project={projects.find(p => p.id === task.projectId)}
              users={users}
              isSelected={selectedTask?.id === task.id}
               ref={taskRefs.current[task.id]} // pass the ref

            />
            
          </div>
        </CarouselItem>
      );
    })}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
      
    )}
  </section>
</div>



  {/*==============================================================================================================*/}     
        {/* Tasks List */}
        <div className="grid grid-cols-2 gap-4">
        <div ref={tasksRef} className="bg-white px-6 rounded-2xl shadow-md mb-3">
          <h2 className="text-xl font-semibold m-4">Tasks </h2>

          {/* Scrollable Task List */}
          <div className="max-h-[250px] overflow-y-auto p-4">
            {allTasks.map((task, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox
                  id={`task-${index}`}
                  onClick={() => {
                    setSelectedTask(task);
                    setShowAlert(!showAlert);
                  }}
                  className="border-[#B8C480] data-[state=checked]:bg-[#FFB7B2] data-[state=checked]:border-[#FFD972]"
                />

                <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
                  <AlertDialogContent className="text-center">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-[#B8C480] text-xl font-bold">
                        🎉 Good job {selectedTask?.title}
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-sm text-gray-600">
                        You've completed <strong>{selectedTask?.title}</strong>. Keep up the amazing work 👏
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    {/* 🎬 GIF Section */}
                    <div className="flex justify-center my-4">
                      <img
                        src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif"
                        alt="Celebration"
                        className="w-40 h-40 rounded-lg shadow-md"
                      />
                    </div>

                    <AlertDialogFooter className="justify-center mt-2">
                      <AlertDialogAction
                        className="bg-[#FFB7B2] hover:bg-[#FFD972] text-black px-4 py-2 rounded-full text-sm"
                        onClick={() => setShowAlert(false)}
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <form className="flex-1">
                  <tr className="flex justify-between border-b border-gray-400 py-2">
                    <td>
                      <label htmlFor={`task-${index}`} className="text-sm font-medium">
                        {task.title}
                        <p className="text-[8px] text-gray-500">{task.startDate}</p>
                      </label>
                    </td>
                    <td>
                      <div className="text-xs text-gray-500 flex pt-[6px] items-center">
                        <p>%</p>
                        <input
                          type="number"
                          min={0}
                          max={100}
                          value={task.status}
                          onChange={(e) => {
                            let value = Number(e.target.value);
                            if (value < 0) value = 0;
                            if (value > 100) value = 100;

                            const updatedTasks = [...allTasks];
                            updatedTasks[index].status = value;

                            setAllTasks(updatedTasks);
                          }}
                          className="w-12 rounded px-1 text-xs"
                        />
                      </div>
                    </td>
                  </tr>
                </form>
              </div>
            ))}
          </div>
        </div>
 

  <div className="bg-white p-0 rounded-2xl shadow-md mb-3 ">
    <h2 className="text-xl font-semibold m-4 ">Tasks Progress</h2>
  <BarChart width={300} height={250} data={chartDataset }>
    <CartesianGrid strokeDasharray='' />
    <XAxis dataKey="title" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="progress" fill="#B8C480" radius={[20,20,0,0]} />
    <Bar dataKey="timeSpent" fill="#FFD972" radius={[20,20,0,0]} />
  </BarChart>
  </div>



          
          
          
          </div>


        </section> 
   

    </main> </div> </div>
       
  );
};

export default ProjectsDashboard;



