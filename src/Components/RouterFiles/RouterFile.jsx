import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import ContactUs from "../ContactUs";
import Student from "../Student";
import EditPg from "../EditPg";
import AddNewStudent from "../AddNewStudent";
import { useState } from "react";
import Data from "../DataContext";

const RouterFile = () => {
  const [data, setData] = useState([
    {
      Name: "Ashish Yadav",
      Age: 24,
      Course: "MERN",
      Batch: "October",
    },
  ]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/student"
        element={
          <Data.Provider value={{ entries: data, updateFunction: setData }}>
            <Student />
          </Data.Provider>
        }
      />
      <Route path="/Contactus" element={<ContactUs />} />
      <Route
        path="/edit"
        element={
          <Data.Provider value={{ entries: data, updateFunction: setData }}>
            <EditPg/>
          </Data.Provider>
        }
      />
      <Route
        path="/addnewstudent"
        element={
          <Data.Provider value={{ entries: data, updateFunction: setData }}>
            <AddNewStudent />
          </Data.Provider>
        }
      />
    </Routes>
  );
};

export default RouterFile;
