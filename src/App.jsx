import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import "./App.css";
import Home from "./pages/Home/Home";
import SalaryComponents from "./pages/Employee/SalaryComponents/SalaryComponents";
import EditSalaryComponent from "./pages/Employee/EditSalaryComponent/EditSalaryComponent";
import AddNewSalaryComponent from "./pages/Employee/AddNewSalaryComponent/AddNewSalaryComponent";
import SalaryDetails from "./pages/Employee/SalaryDetails/SalaryDetails";
import AddSalaryDetails from "./pages/Employee/SalaryDetails/AddSalaryDetails";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/salary-components" element={<SalaryComponents />} />
          <Route path="/employee/salary-details" element={<SalaryDetails />} />
          <Route path="/employee/salary-components/edit" element={<EditSalaryComponent />} />
          <Route path="/employee/salary-components/add-new" element={<AddNewSalaryComponent />} />
          <Route path="/employee/add-salary-details" element={<AddSalaryDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
