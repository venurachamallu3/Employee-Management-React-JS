import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ALL_EMP_SHOW_API } from '../Utilis/config';
import { Link } from 'react-router-dom';
import EmployeeCard from './EmployeeCard';
import { dummyProfilePhotos } from '../Utilis/config';

const Employeespage = () => {

    const [employees,setemployees]= useState([]);
    const [searchtext,setsearchtext]=useState('')
    const [foundEmployee, setfoundEmployee]= useState([])

    useEffect(()=>{
        fetchEmployees();
    },[])

    async function fetchEmployees(){
        const response = await axios.get(ALL_EMP_SHOW_API);
        setemployees(response.data)
        setfoundEmployee(response.data)
    }

    useEffect(() => {
      findSearchEmployee();
    }, [searchtext, employees]);

   async function findSearchEmployee(){
      // const response = await axios.get(ALL_EMP_SHOW_API);
      // setemployees(response.data)
      const results = employees.filter((emp)=> emp.name.toLowerCase().includes(searchtext.toLowerCase()))
      console.log(results)
      // setemployees(results)
      setfoundEmployee(results)
    }


  return (
    <>
    <div className='m-2'></div>
    <div className='font-bold text-center bg-green-500 p-4'> Employee Details</div>
    <div className='flex justify-between'>
    <div> Search :  <input type='text' placeholder='Search with Employee Name' onChange={(e)=>setsearchtext(e.target.value)} className='bg-yellow-100 rounded-md text-2xl'></input>
    <button className='rounded-md p-2 m-2 bg-green-400' onChange={(e)=>setsearchtext(e.target.value)} onClick={findSearchEmployee}>Search</button>
    </div>

<Link to='/add-employee'><div><button className='bg-red-400 m-3 p-3 text-2xl'>Add Employee</button></div></Link>
    
    
    </div>


    { foundEmployee.length > 0 ? ( <div> 
      
      <ul className='text-3xl p-3 m-2  flex flex-wrap'>{foundEmployee.map((emp)=>{
        return (  <Link to={"/employee/"+emp.id}>
           <EmployeeCard key={emp.name} photo={dummyProfilePhotos[emp.id]} name={emp.name} email={emp.email} /> </Link>)
    })}
    </ul> 

    </div> ) : (  <ul className='text-3xl p-3 m-2  flex flex-wrap'>{employees.map((emp)=>{
        return (  <Link to={"/employee/"+emp.id}>
           <EmployeeCard key={emp.name} photo={dummyProfilePhotos[emp.id]} name={emp.name} email={emp.email} /> </Link>)
    })}
    </ul>) }



    </>
  )
}

export default Employeespage




