import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import "./App.css";
import Home from "./pages/Home/Home";
import SalaryComponents from "./pages/Employee/SalaryComponents/SalaryComponents";
import EditSalaryComponent from "./pages/Employee/EditSalaryComponent/EditSalaryComponent";
import AddNewSalaryComponent from "./pages/Employee/AddNewSalaryComponent/AddNewSalaryComponent";
import Employee from "./pages/Employee/SalaryDetails/Employee";
import EmployeeDetails from "./pages/Employee/SalaryDetails/EmployeeDetails/EmployeeDetails";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/salary-components" element={<SalaryComponents />} />
          <Route path="/employee/employee-list" element={<Employee />} />
          <Route path="/employee/employee-detail" element={<EmployeeDetails />} />
          <Route path="/employee/salary-components/edit" element={<EditSalaryComponent />} />
          <Route path="/employee/salary-components/add-new" element={<AddNewSalaryComponent />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
