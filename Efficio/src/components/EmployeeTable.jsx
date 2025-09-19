import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EvaluationChart from "./EvaluationChart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmployeeData from "../data/EmployeeData";


const EmployeeTable = () => {
  const { users: initialUsers } = EmployeeData();
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

 
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      
      <div className=" pt-2 p-20 min-h-screen ">
        {/* title */}
        <h1 className="text-xl font-semibold m-4 text-start">
          Employees
        </h1>

  {/* Form */}
        {showForm && (
          <div className="max-w-md mx-auto mb-6 p-6 bg-white shadow-lg rounded-lg">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const newUser = {
                  id: `u${users.length + 1}`,
                  name: form.name.value,
                  role1: form.jobTitle.value,
                  email: form.email.value,
                  number: form.phone.value || "-",
                  role: form.role.value,
                  teamId: "t1",
                };
                setUsers([...users, newUser]);
                setShowForm(false);
                form.reset();
              }}
            >
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                name="jobTitle"
                type="text"
                placeholder="Job Title"
                required
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                name="phone"
                type="text"
                placeholder="Phone"
                className="w-full mb-3 p-2 border rounded"
              />
              <select
                name="role"
                required
                className="w-full mb-3 p-2 border rounded"
              >
                <option value="">Select Role</option>
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
              </select>
            <div className="grid grid-cols-2 justify-between px-20 ">
                 <button
          type="submit"
      
            className="relative w-25  mb-4 h-8 overflow-hidden text-sm font-medium text-[#080808] rounded-lg z-10
                      bg-gradient-to-br from-[#FFB7B2] to-[#FFB7B2] transition-colors duration-300
                      group hover:text-white"
          >
        <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#b8c480]  to-[#b8c480]  z-0
                            transition-all duration-700 ease-in-out group-hover:h-full rounded-lg"></span>
        <span className="relative z-10"> Add </span>
        </button>
    <button
          type="submit"
          onClick={() => setShowForm(false)}
            className="relative w-25  mb-4 h-8 overflow-hidden text-sm font-medium text-[#080808] rounded-lg z-10
                      bg-gradient-to-br from-[#b8c480] to-[#b8c480] transition-colors duration-300
                      group hover:text-white"
          >
        <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#FFB7B2]  to-[#FFB7B2]  z-0
                            transition-all duration-700 ease-in-out group-hover:h-full rounded-lg"></span>
        <span className="relative z-10"> Cancel</span>
        </button></div>
        
            </form>
          </div>
        )}
        <div className="grid grid-cols-2">
       

      

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name..."
          className="bg-[#FFB7B2] placeholder-gray-600 text-gray-800 border border-gray-700 rounded-lg px-1 mb-4 h-8 w-full focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
  {/* Search button */}

         <div className="flex justify-center mb-4">
        
           <button
          type="submit"
          onClick={() => setShowForm(true)}
            className="relative w-25  mb-4 h-8 overflow-hidden text-sm font-medium text-[#080808] rounded-lg z-10
                      bg-gradient-to-br from-[#FFB7B2] to-[#FFB7B2] transition-colors duration-300
                      group hover:text-white"
          >
        <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#b8c480]  to-[#b8c480]  z-0
                            transition-all duration-700 ease-in-out group-hover:h-full rounded-lg"></span>
        <span className="relative z-10"> Add Employee</span>
        </button>
       
         
        </div>
</div>
        {/* Table */}
        <Table className="w-full text-sm text-left bg-white text-gray-700 border border-gray-400">
          <TableCaption >
           
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-[#FFB7B2] px-4 py-3 text-gray-700 font-semibold ">
              <TableHead >
                Name
              </TableHead>
              <TableHead >
                Job Title
              </TableHead>
              <TableHead >
                Email
              </TableHead>
              <TableHead >
                Phone
              </TableHead>
              <TableHead>
                Role
              </TableHead>
              <TableHead >
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id} className="border-b border-gray-400">
                <TableCell className="px-4 py-3">{user.name}</TableCell>
                <TableCell className="px-4 py-3">{user.role1}</TableCell>
                <TableCell className="px-4 py-3">{user.email}</TableCell>
                <TableCell className="px-4 py-3">{user.number || "-"}</TableCell>
                <TableCell className="px-4 py-3">{user.role}</TableCell>
                <TableCell className="px-4 py-3 text-center space-x-2">
               <button
    onClick={() => navigate(`/employeeboard/${user.id}`)}
  className="bg-blue-500 text-white px-4 py-1.5 rounded"
>
  View
</button>
                  <button
                    className="bg-red-500 text-white px-4 py-1.5 rounded"
                    onClick={() => setUsers(users.filter(u => u.id !== user.id))}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
   
      </div>
      < EvaluationChart />
    </div>
  );
};

export default EmployeeTable;




