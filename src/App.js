import React from 'react';
import {Routes,Route,Navigate,BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import EmployeeDataTable from './Components/EmployeeDataTable';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Navigate to="/read" />}/>
          <Route path="/create" element={<AddEmployee/>}>Add</Route>
          <Route path="/read" element={<EmployeeDataTable/>}/>
          <Route path="/edit/:id" element={<EditEmployee/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
