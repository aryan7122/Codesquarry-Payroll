import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import "./App.css";
import Home from "./pages/Home/Home";
import Reimbursement from "./pages/Reimbursement/Reimbursement";
import SalaryComponents from "./pages/Settings/SalaryComponents/SalaryComponents";
import EmployeeList from "./pages/Employee/EmployeeList";
import EmployeeDetails from "./pages/Employee/EmployeeDetails/EmployeeDetails";
import EditSalaryComponent from "./pages/Settings/SalaryComponents/EditSalaryComponent/EditSalaryComponent";
import AddNewSalaryComponent from "./pages/Settings/SalaryComponents/AddNewSalaryComponent/AddNewSalaryComponent";
import AddSalaryDetails from "./pages/Employee/AddSalaryDetails";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings/salary-components" element={<SalaryComponents/>} />
          <Route path="/employee" element={<EmployeeList />} />
          <Route path="/employee/employee-detail" element={<EmployeeDetails />} />
          <Route path="/settings/salary-components/edit" element={<EditSalaryComponent />} />
          <Route path="/settings/salary-components/add-new" element={<AddNewSalaryComponent />} />
          <Route path="/employee/add-salary-details" element={<AddSalaryDetails />} />
          <Route path="/approvals/reimbursements" element={<Reimbursement />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
