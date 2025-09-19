{/* imports part */}
{/*==============================================================================================================*/}
import {React,useState} from "react";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import Navbar from "../components/navbar";
import useEmployeeData from "../data/EmployeeData";
import useProjectData from "../data/ProjectData";
import useTasksData from "../data/TasksData";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,
AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"
{/*==============================================================================================================*/}

{/* TaskCard component to display individual tasks */}

{/*==============================================================================================================*/}

const TaskCard = ({ task, project }) => (
  <div >
    <p className="text-gray-400">{task.startDate}</p>
    <h3 className="text-lg font-semibold ">{task.title}</h3>
    <p className="text-gray-700">{project?.name || "There is no project now"}</p>
    <div className="mt-1 pb-1"><Progress value={task.status} className="bg-gray-200 [&>div]:bg-[#B8C480] [&>div]:rounded-full h-2"
 /> </div>
    <hr className="mt-1 pb-1 border-gray-400"></hr>
     {task.note && <p><strong>Note:</strong> {task.note}</p>}
    <div className="flex justify-between text-gray-400 ">
      <p><strong className="text-black">Due:</strong> {task.dueDate}</p>
       <p > {task.timeSpent} hrs</p>
    </div>
   
  </div>
);
{/*==============================================================================================================*/}

{/* EmployeeBoard component - main component for the employee dashboard */}

{/*==============================================================================================================*/}
{/*const part*/}
{/*==============================================================================================================*/}
const EmployeeBoard = () => {
const [showAlert, setShowAlert] = useState(false);
const [selectedTask, setSelectedTask] = useState(null);
const [mTasks, setMyTasks] = useState([]);
const [date, setDate] = useState(new Date()) ;
const { users } = useEmployeeData();
const { projects } = useProjectData();
const { tasks } = useTasksData();
const [newTask, setNewTask] = useState({
  title: '',
  startDate: '',
  status: 0,
});

const currentUserId = "u1"; // Simulated login this is static for now
const currentUser = users?.find(user => user.id === currentUserId);
    if (!currentUser) return <p className="p-6 text-red-600">User not found.</p>;

const myTasks = tasks?.filter(task => task.assignedTo === currentUserId) || [];
  
const chartData = ({ task }) => ({
  title: task.title,
  progress: task.status,
  timeSpent: task.timeSpent
   });
const chartDataset = myTasks.map(task => chartData({ task }));
const allTasks = [...mTasks, ...myTasks];
 

  return (
    <div>
     <Navbar />
     
    <div className="pt-20 flex min-h-screen ">
{/*==============================================================================================================*/}  
      {/* Sidebar with Employee Info */}
{/*==============================================================================================================*/}
      <aside className="w-72 bg-white shadow-md p-6 mb-4 pb-4 border-r border-gray-200 rounded-r-2xl ">
         {/* Employee Info */}
       <div
          className="bg-[#FFB7B2] shadow-md rounded-2xl p-3 text-center mb-3
            hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300" >
        <div className="flex flex-col items-center mb-2  gap-2">
          
         <img src="/imges/avatar.jpg" alt="User avatar" className="w-20 h-20 rounded-full shadow-md border-2 border-[#FFD972]" />
        <div className=" text-black">
          
          <p>{currentUser.name}</p>
          <p> {currentUser.role1}</p>
        </div>
        </div>
        <hr className="mb-4 border-gray-600"></hr>
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
{/*==============================================================================================================*/}
         {/* calender  */}
{/*==============================================================================================================*/}
          
        <div className="flex flex-col items-center mb-0  gap-4">
          <Calendar mode="single" selected={date} onSelect={setDate} 
          className="  bg-[#B8C480] shadow-md rounded-2xl p-2 text-center mb-3
            hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300" /> 
         </div>
{/*==============================================================================================================*/} 
     {/* Add Task Form */}
{/*==============================================================================================================*/}     
       <div  className="bg-[#FFD972] shadow-md rounded-2xl p-3  text-center 
            hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300" >
        <form
        onSubmit={(e) => {
          e.preventDefault();
          setMyTasks([...mTasks, newTask]);
          setNewTask({ title: '', startDate: '', status: 0 });
        }}
        className=" space-y-2">
        <p>Add your Assignments</p>
        <input
          type="text"
          placeholder="Task title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="border p-2  w-full text-sm rounded-lg border-black"
        />
        <input
          type="date"
          value={newTask.startDate}
          onChange={(e) => setNewTask({ ...newTask, startDate: e.target.value })}
          className="border p-2 rounded-lg w-full text-sm border-black"
        />
       <input
          type="number"
          min={0}
          max={100}
          placeholder="Progress %"
          value={newTask.status}
          onChange={(e) => {
            let value = Number(e.target.value);
            if (value < 0) value = 0;
            if (value > 100) value = 100;
            setNewTask({ ...newTask, status: value });
          }}
          className="border p-2 rounded-lg border-black w-full text-sm"
        />
        <button
          type="submit"

            className="relative w-full py-2 px-4 mb-2 me-2 overflow-hidden text-sm font-medium text-[#080808] rounded-2xl z-10
                      bg-gradient-to-br from-[#FFB7B2] to-[#FFB7B2] transition-colors duration-300
                      group hover:text-white"
          >
        <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#b8c480]  to-[#b8c480]  z-0
                            transition-all duration-700 ease-in-out group-hover:h-full rounded-2xl"></span>
        <span className="relative z-10">submit</span>
        </button>
      </form>
       </div>
      </aside>
{/*==============================================================================================================*/}
  {/* Main Content with Task Cards */}
{/*==============================================================================================================*/}
  <main className="flex-1 ">
   <section className="grid md:grid-cols-1 gap-4 max-w-6xl mx-auto px-8  p-0 ">
{/*==============================================================================================================*/}
  {/*    Header with Greeting and Icon */}
{/*==============================================================================================================*/}
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
{/*==============================================================================================================*/}  
  {/*    Today's Tasks part */}
{/*==============================================================================================================*/}
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
      const project = projects?.find(proj => proj.id === task.projectId);
      return (
        <CarouselItem key={task.id} className="md:basis-1/2 pt-3 ">
          <div
            className="bg-white shadow-md rounded-2xl p-6  hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300"
          >
            <TaskCard task={task} project={project} />
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
  {/*     Charts  */}
{/*==============================================================================================================*/}  

 <section className="grid md:grid-cols-2 gap-4">
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
{/*==============================================================================================================*/}
 {/*     Assignments List  */}
 {/*==============================================================================================================*/} 
    <div className="bg-white px-6 rounded-2xl shadow-md mb-3">
      <h2 className="text-xl font-semibold m-4">Assignments ({myTasks.length})</h2>

     
      

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
        🎉 Good job {currentUser.name}
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
            <div className="text-xs text-gray-500 flex pt-[6px]  items-center">
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

                  // Split back into mTasks and myTasks if needed
                  const newMTasks = updatedTasks.filter(task => !task.assignedTo);
                  setMyTasks(newMTasks);
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
 
</section>

</section>
  </main>
 

</div>
  </div>

  );
};

export default EmployeeBoard;