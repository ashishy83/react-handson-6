import React from "react";
// import { useState } from 'react'
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Data from "./DataContext";
import { useNavigate } from "react-router-dom";

const Student = () => {
    const navigate = useNavigate();
  const handleAdd = () => {
    navigate('/addnewstudent')
  };

  const context = useContext(Data);

  return (
    <div>
      <NavBar />
      <div className="std-title">
        <span className="stud">Students Details</span>
        <button className="add-student" onClick={handleAdd}>
          <span  className="addLink">
            Add New Student
          </span>
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Changes</th>
            </tr>
          </thead>
          <tbody>
            {context.entries.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch} </td>
                <td>
                  {
                    <Link to={'/edit'} state={{ data: index }}>
                      Edit
                    </Link>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
