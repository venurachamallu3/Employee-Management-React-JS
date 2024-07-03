import React from 'react'
import venu from '../assests/venu.png'


const EmployeeCard = ({name,photo,email}) => {

  return (
    <>
    
    <div className=' m-10 w-80 h-80 bg-amber-200'>
      
    <img src={photo} alt="venu" className='p-2 m-2 ' ></img>

     <label>Name : {name}</label>
      <p>{email}</p>
      
    </div>
    </>
  )
}

export default EmployeeCard