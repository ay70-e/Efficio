import React from "react";
import Navbar from "../components/navbar";
import useEmployeeData from "../data/EmployeeData";
import useProjectData from "../data/ProjectData";
import useTasksData from "../data/TasksData";
import { Calendar } from "../components/ui/calendar";
import { Progress } from "../components/ui/progress";
import { Checkbox } from "../components/ui/checkbox";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "@/components/ui/alert-dialog";

const TaskCard = ({ task, project }) => (
  <div>
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

  const selectedProjectId = projects?.[0]?.id || "p1";
  const project = projects?.find(p => p.id === selectedProjectId) || null;

  const manager = users?.find(u => u.id === project?.managerId);
  const teamMembers = users?.filter(u => u.teamId === project?.teamId) || [];
  const projectTasks = tasks?.filter(t => t.projectId === project?.id) || [];

  const [allTasks, setAllTasks] = React.useState(projectTasks);
  const [mTasks, setMyTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState({ title: "", startDate: "", status: 0 });
  const [selectedTask, setSelectedTask] = React.useState(null);
  const [showAlert, setShowAlert] = React.useState(false);
  const tasksRef = React.useRef(null);
  const [date, setDate] = React.useState(new Date());
  const tasks = useTasksData();

  if (!project) return <p className="p-6 text-red-600">Project not found.</p>;

  const tasksNotStarted = allTasks.filter(t => t.status === 0);
  const tasksInProgress = allTasks.filter(t => t.status > 0 && t.status < 100);
  const tasksCompleted = allTasks.filter(t => t.status === 100);

  return (
    <div>
      <Navbar />
      <main className="flex-1">
        <div className="pt-20 flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-72 bg-white shadow-md p-6 border-r border-gray-200 rounded-r-2xl">
            <div className="bg-[#FFB7B2] shadow-md rounded-2xl p-6 text-center mb-6 hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300">
              <div className="flex flex-col items-center mb-6 gap-4">
                <div className="space-y-2 text-black">
                  <h2 className="text-2xl font-extrabold mb-4">{project.name}</h2>
                  <p className="text-gray-700 font-semibold">Manager</p>
                  <p className="text-gray-900">{manager?.name || "N/A"}</p>
                </div>
              </div>
              <p className="text-gray-700 font-semibold mt-3">Team Members</p>
              {teamMembers.map(member => (
                <p key={member.id} className="text-gray-900">{member.name} (Employee)</p>
              ))}
              <div className="mb-4">
                <p className="text-gray-700 font-semibold">Deadline</p>
                <p className="text-gray-900">{project.deadline}</p>
              </div>
              <div className="mt-4">
                <Progress value={project.progress} className="h-3 rounded-full" />
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
        </div>

        {/* Header */}
        <section className="grid md:grid-cols-1 gap-4 max-w-6xl mx-auto px-8 p-0">
          <div className="flex md:flex-row items-center justify-between px-8">
            <div className="max-w-lg">
              <p className="text-[16px] font-bold text-gray-900">Hi, guys</p>
              <p className="text-[12px] mb-0 font-medium text-[#B8C480]">Teamwork makes the dream work!</p>
            </div>
          </div> 

          {/* Yellow Box */}
          <div className="bg-[#FFD972] shadow-md rounded-2xl p-6 mt-4 flex items-center justify-between">
            {/* Left Side: Search + Stats + Button */}
            <div className="flex-1">
              {/* Search */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="w-full border p-2 rounded-lg text-sm border-black"
                />
              </div>

              {/* Stats */}
              <div className="flex justify-between mb-4">
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

              {/* Button */}
              <div className="text-center">
                <button
                  className="bg-[#FFB7B2] px-6 py-2 rounded-lg font-medium shadow hover:shadow-lg hover:scale-105 active:scale-95 transition duration-300"
                  onClick={() => tasksRef.current.scrollIntoView({ behavior: "smooth" })}
                  >
                  Go to Tasks
                </button>
              </div>
            </div>

            {/* Right Side: SVG Image */}
            <div className="ml-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-32 h-32">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 17.25h-4.5m2.25-13.5a6 6 0 0 0-6 6v3.75a2.25 2.25 0 0 1-.75 1.687l-.75.563a.75.75 0 0 0 .75 1.25h13.5a.75.75 0 0 0 .75-1.25l-.75-.563a2.25 2.25 0 0 1-.75-1.687V9a6 6 0 0 0-6-6Z"/>
              </svg>
            </div>
          </div>
        </section>

        {/* Tasks List */}
        <div ref={tasksRef} className="bg-white px-6 rounded-2xl shadow-md mb-3">
          <h2 className="text-xl font-semibold m-4">Tasks ({myTasks.length})</h2>

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
      </main>
    </div>
  );
};

export default ProjectsDashboard;



