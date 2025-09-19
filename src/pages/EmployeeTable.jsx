import React, { useState } from "react";
import Navbar from "../components/Navbar";
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

 
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="p-8 pt-24 min-h-screen bg-[#FAFAD2]">
        
        <h1 className="text-4xl font-bold text-center mb-6 text-[#B8C480]">
          Employees
        </h1>

     
        <div className="flex justify-center mb-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setShowForm(true)}
          >
            Add Employee
          </button>
        </div>

     
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
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded w-full"
              >
                Add
              </button>
            </form>
          </div>
        )}

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name..."
          className="bg-pink-200 placeholder-green-600 text-gray-800 border border-pink-300 rounded-lg px-4 py-2 mb-6 w-full focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Table */}
        <Table className="w-full text-sm text-left text-gray-700 border border-gray-300">
          <TableCaption className="text-gray-500 italic">
            A list of employees
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-pink-200">
              <TableHead className="px-4 py-3 text-green-700 font-semibold">
                Name
              </TableHead>
              <TableHead className="px-4 py-3 text-green-700 font-semibold">
                Job Title
              </TableHead>
              <TableHead className="px-4 py-3 text-green-700 font-semibold">
                Email
              </TableHead>
              <TableHead className="px-4 py-3 text-green-700 font-semibold">
                Phone
              </TableHead>
              <TableHead className="px-4 py-3 text-green-700 font-semibold">
                Role
              </TableHead>
              <TableHead className="px-4 py-3 text-center text-green-700 font-semibold">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id} className="border-b border-gray-300">
                <TableCell className="px-4 py-3">{user.name}</TableCell>
                <TableCell className="px-4 py-3">{user.role1}</TableCell>
                <TableCell className="px-4 py-3">{user.email}</TableCell>
                <TableCell className="px-4 py-3">{user.number || "-"}</TableCell>
                <TableCell className="px-4 py-3">{user.role}</TableCell>
                <TableCell className="px-4 py-3 text-center space-x-2">
                  <button className="bg-blue-500 text-white px-4 py-1.5 rounded">
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
    </div>
  );
};

export default EmployeeTable;




