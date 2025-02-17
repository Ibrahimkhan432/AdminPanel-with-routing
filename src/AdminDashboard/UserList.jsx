import axios from "axios";
import React, { useEffect, useState } from "react";
import { AppRoutes } from "../constant/Constant";
const UserList = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get(AppRoutes.getAllUser);
        setUsers(res.data.data);
        console.log(Users);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAllUsers();
  }, []);
  const userList = [
    {
      name: "Ibrahim",
      email: "ibrahim@example.com",
      contact: "123-456-7890",
      cnic: "CNIC-101",
      vehicle: "civic",
    },
    {
      name: "Ali",
      email: "ali@example.com",
      contact: "987-654-3210",
      cnic: "CNIC-102",
      vehicle: "civic",
    },
    {
      name: "Bilal",
      email: "bilal@example.com",
      contact: "555-666-7777",
      cnic: "CNIC-103",
      vehicle: "civic",
    },
    {
      name: "Ather",
      email: "ather@example.com",
      contact: "111-222-3333",
      cnic: "CNIC-104",
      vehicle: "civic",
    },
    {
      name: "Farhan",
      email: "farhan@example.com",
      contact: "444-555-6666",
      cnic: "CNIC-105",
      vehicle: "civic",
    },
  ];
  return (
    <div className="px-4 bg-slate-400 min-h-screen">
      <div className="font-bold text-2xl  flex flex-row text-slate-900 justify-between">
        <span>
        User List
        </span>
        <span className="text-sm mr-10 items-center justify-center">Total Users :{Users.length} </span>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-900 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                S no.
              </th>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>

              <th scope="col" className="px-6 py-3">
                Contact
              </th>
              <th scope="col" className="px-6 py-3">
                CNIC
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userList.map((data, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}.</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.name}
                </th>
                <td className="px-6 py-4">{data.email}</td>
                <td className="px-6 py-4">{data.contact}</td>
                <td className="px-6 py-4">{data.cnic}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
