import React,{useEffect,useState} from 'react';
import { Link,Navigate,useNavigate } from 'react-router-dom';
import axios from "axios";




function EmployeeDataTable() {

  const Navigate =useNavigate();
  const arr=[]
  const baseURL = "https://jsonplaceholder.typicode.com"
  const [employees,setEmployee] = useState([])

  const setEmployeeData = () =>{
    axios.get(baseURL+"/posts").then((res)=>{
      setEmployee(res.data)
      // console.log(res.data)
      arr.push(res.data)
      console.log(arr)

    }).catch(error =>{
      alert('error')
    })

    console.log(arr)
  }
  
  useEffect(()=>{
    setEmployeeData()
  },[])
  return (
    <div class="card-body">
      <nav>
        <button className='"btn btn-primary nav-item active'
                onClick={()=>Navigate("/create")}
                
        >
          Create New Employee

        </button>
      </nav>
      <br>
      </br>

       <div class="container">
        <div class="row">
          <div class="col-12">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>title</th>
                  <th>body</th>
                  <th scope="all"> Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  employees && 
                  employees.map((employee,index)=>(
                    <tr>
                      <th>{employee.id}</th>
                      <th>{employee.title}</th>
                      <th>{employee.body}</th>
                      <th>
                        <Link to ={"/edit/"+employee.id}>Edit</Link>
                        {/* <button onClick={()=>removeEmployee(employee.id)}>Remove Employee</button> */}
                      </th>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div> 

        </div>
       </div>


    </div>
  )
}

export default EmployeeDataTable