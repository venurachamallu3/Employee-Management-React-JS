import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {  Single_EMP_FETCH_API, UPDATE_EMP_API } from '../Utilis/config'
import { DELETE_EMP_API } from '../Utilis/config'
import EmpNotFound from './EmpNotFound'


const EmployeeDetail = () => {
    const [Employee,setEmployee]=useState({
        name:'',
        email:'',
        address:'',
        departmentCode : ''
    })
    // const {name,email,address,departmentCode}={Employee}
    const {id} = useParams()


    const [updateEmp,setupdateEmp] = useState({
        name:'',
        email:'',
        address:'',
        departmentCode:''
        })

    const [c,setc]=useState(0);
    const [error, seterror] =useState(null)

    const navigate = useNavigate();

    useEffect(()=>{
        fetchSingleEmployee(id)
    },[id])

    async function fetchSingleEmployee(id){
        try{
            const response = await axios.get(Single_EMP_FETCH_API+id)
            setEmployee(response.data)

        }catch(err){
            if(err.response && err.response.status === 404 ){
                console.log("EMPLOYEE NOT FOUND....")
                seterror("Employee not found .....")
            }
        }
        

    }

    if(error){
        return <EmpNotFound/>;
   }

    async function deleteEmployee(id){        
        const confirm = window.confirm("Are you sure you want to delete this employee?");
        if(confirm){
            const response = await axios.delete(DELETE_EMP_API+id);
        navigate('/')
        }else{
            navigate('/employee/'+id)
        }
        
    }

    function updatec(){
        setc(1);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setupdateEmp({
          ...updateEmp,
          [name]: value,
        });
      };


    async function updateEmployeeDetails(){
        console.log(updateEmp.email+"emial")
        const response = await axios.put(UPDATE_EMP_API+id,updateEmp);
        alert("Successfully updated...")
        navigate("/")
    }

  return (
    <>
    <div className='flex'>

    <div>
    <div className='m-10 w-80 h-60 bg-amber-200 '>
        <div>Name : {Employee.name}</div>
        <div>Email : {Employee.email}</div>
        <div>Address : {Employee.address}</div>
        <div>Dept : {Employee.departmentCode}</div>
    </div>
    <div>
        <button className='rounded-md bg-green-500 m-10' onClick={updatec}>Update</button>
        <button className='rounded-md m-10 bg-red-600' onClick={()=>deleteEmployee(Employee.id)}>Delete</button>
    </div>
    </div>

    { c===0 ? <div> </div> :     
    
   <div>
     <div className='p-2 m-6'>

<div>Updating the Employee Details</div>
<div className='p-2 m-2 h-80 bg-gray-400 w-80'>
        <label>Name : </label><input type='text' name="name" value={updateEmp.name}  onChange={handleChange}  className='bg-gray-100 m-3'></input><br></br>
        <label>Email : </label><input type='email' name="email" value ={updateEmp.email} onChange={handleChange} className='bg-gray-100 m-3'></input><br></br>
        <label>Address : </label><input type='text' name="address" value ={updateEmp.address} onChange={handleChange} className='bg-gray-100 m-3'></input><br></br>
        <label>Department Code : </label><input type='text' name="departmentCode" value ={updateEmp.departmentCode} onChange={handleChange} className='bg-gray-100 m-3'></input><br></br>
</div>

<div>
<button className='rounded-md bg-green-500 m-10' onClick={updateEmployeeDetails}>SAVE</button>
</div>

</div>
   </div>
    
    }
    </div>
    </>
  )
}

export default EmployeeDetail