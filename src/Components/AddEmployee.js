import axios from 'axios';
import React, { useState } from 'react'
import { ADD_EMP_API } from '../Utilis/config';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [employeeExist, setemployeeExist]= useState(false)

    const navigate = useNavigate()
    

    const [empdata , setempdata]= useState({
        name: '',
        email: '',
        address: '',
        departmentCode:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setempdata({
          ...empdata,
          [name]: value,
        });
      };

      async function addEmployee(){
        try{
          console.log("Api is calling...")
        const response = await axios.post(ADD_EMP_API,empdata);
        console.log("response is "+response);
        
        // console.log("EMP ADD RES "+response.data)
        alert("Employee added successfully....")
        navigate('/');
        }catch(err){
          if(err.response && err.response.status === 409 ){
              console.log("Employee with emial already exist..")
              setemployeeExist(true)
          }
      }
        

      }



  return (
        <>
            
            <div className='w-100 h-80 m-8 bg-red-100 text-xl text-center'>
                <div className='bg-green-100'>ADD EMPLOYEE DETAILS </div>
                <label>Name : </label><input type='text' name="name" value ={empdata.name} onChange={handleChange} className='bg-gray-100 m-3'></input><br></br>
                <label>Email : </label><input type='email' name="email" value ={empdata.email} onChange={handleChange} className='bg-gray-100 m-3'></input><br></br>
                <label>Address : </label><input type='text' name="address" value ={empdata.address} onChange={handleChange} className='bg-gray-100 m-3'></input><br></br>
                <label>Department Code : </label><input type='text' name="departmentCode" value ={empdata.departmentCode} onChange={handleChange} className='bg-gray-100 m-3'></input><br></br>
            </div>
            <div>
                <div className='text-center'><button  onClick={addEmployee}
                className='text-center text-2xl rounded-md bg-green-500 text-white-800  m-10 '> &nbsp;&nbsp;ADD &nbsp;</button></div>
            </div>
            <div className=' p- m-2 '>
                      { employeeExist ? 
                          <div className='space-x-6'>
                                Employee {empdata.email} is already exist . 
                          </div> 
                          : <div></div>
                      }
              </div>
        </>
  )
}

export default AddEmployee 