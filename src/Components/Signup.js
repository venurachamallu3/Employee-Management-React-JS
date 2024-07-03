import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser , addBasicUser } from '../Utilis/UserSlice'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate();

    const [registeruser,setregisteruser] = useState({
        firstname:'',
        email:'',
        password:''
    })

    const[cfmpwd,setcfmpwd]=useState('')

    const [alreadyExistUser, setalreadyExistUser]= useState(null)
    const [passwordnotmatched,setpasswordnotmatched]= useState(false)

    const dispatch = useDispatch(); 

    const bu = useSelector((state)=>state.Users.Basicusers);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setregisteruser({
          ...registeruser,
          [name]: value,
        });
      };


    function userRegister(){

       const alreadyExistUser= bu.find((us) => us.email=== registeruser.email);
       setalreadyExistUser(alreadyExistUser);
        if(alreadyExistUser){
            console.log("Email is aleready exist")
            return;
        }
        else if(registeruser.password !==cfmpwd){
            setpasswordnotmatched(true)
            console.log("Password not matched.....")
        }
        else {
        dispatch(addBasicUser(registeruser))    
        alert("Successfully Registered......")
        navigate('/signin')
        }

    }

    return (
      <>
          <div className='flex items-center justify-center  bg-red-100'>

          <div className='p-2 m-2 text-red-500 text-2xl text-center'>Employee Sign-in</div>
          <div className='w-1/2 bg-orange-100 px-6 py-6 m-10 rounded-lg'>
              <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                      <label className="w-1/3">Enter Your Name:</label>
                      <input 
                      required='true'
                          type='text' 
                          name="firstname" 
                          onChange={handleChange} 
                          value={registeruser.firstname} 
                          className='flex-1 p-2 bg-green-500 text-white rounded-md' 
                      />
                  </div>
                  <div className="flex items-center space-x-4">
                      <label className="w-1/3">Enter Email Address:</label>
                      <input 
                          type='text' 
                          name='email' 
                          onChange={handleChange} 
                          value={registeruser.email} 
                          className='flex-1 p-2 bg-green-500 text-white rounded-md' 
                      />
                  </div>
                  <div className="flex items-center space-x-4">
                      <label className="w-1/3">Enter Password:</label>
                      <input 
                          type='password' 
                          name='password' 
                          onChange={handleChange} 
                          value={registeruser.password} 
                          className='flex-1 p-2 bg-green-500 text-white rounded-md' 
                      />
                  </div>
                  <div className="flex items-center space-x-4">
                      <label className="w-1/3">Confirm Password:</label>
                      <input  
                          type='password' 
                          name='cfmpwd'  
                          value={cfmpwd}  
                          onChange={(e)=>setcfmpwd(e.target.value)} 
                          className='flex-1 p-2 bg-green-500 text-white rounded-md' 
                      />
                  </div>
                  {/* <div className="flex items-center space-x-4">
                      <label className="w-1/3">Please Upload your photo:</label>
                      <input  required
                          type='file' 
                          name='photo'  
                          className='flex-1 p-2 rounded-md' 
                      />
                  </div> */}
              </div>
              <div className='mt-6'>
                  <button 
                      className='bg-red-500 p-2 rounded-md' 
                      onClick={userRegister}
                  >
                      Register
                  </button>
                  <div className='mt-2'>
                      { alreadyExistUser ? 
                          <div className='p-2 text-large'>
                              Email is already registered, please <Link to="/signin" className='text-red-500'>Login</Link>
                          </div> 
                          : <div></div>
                      }
                  </div>

                  <div className='mt-2'>
                      { passwordnotmatched ? 
                          <div className='p-2 text-large'>
                              Password is not matched , Please Enter Correct Password
                          </div> 
                          : <div></div>
                      }
                  </div>
              </div>
          </div>

          </div>
      </>
  );
}


//   return (
//     <>
//         <div className='p-2 m-2 text-purple-500 text-2xl text-center'>Employee Sign-in</div>
//         <div className='w-1/2 h-96 bg-orange-100 px-10 m-10'>
            
//         <label>Enter Your Name : </label>
//         <input type='text' name="firstname" onChange={handleChange} value={registeruser.firstname} className='p-2 m-2 bg-green-500 text-white rounded-md'></input><br></br>
//         <label>Enter Email Address : </label>
//         <input type='text' name='email' onChange={handleChange} value={registeruser.email} className='p-2 m-2 bg-green-500 text-white rounded-md'></input>  <br></br>     
//          <label>Enter Password : </label>
//         <input type='password' name='password' onChange={handleChange} value={registeruser.password} className='p-2 m-2 bg-green-500 text-white rounded-md'></input><br></br>
//         <label>Confirm  Password : </label>
//         <input type='password' name='cfmpwd'  value={cfmpwd}  onChange={(e)=>setcfmpwd(e.target.value)} className='p-2 m-2 bg-green-500 text-white rounded-md'></input> <br></br>
//         <label>Please Upload your photo : </label>
//         <input type='file' name='cfmpwd'  value={cfmpwd}  onChange={(e)=>setcfmpwd(e.target.value)} className='p-2 m-2   rounded-md'></input>
        

//         <div>
//             <button className=' bg-red-500 p-2 m-6 rounded-md' onClick={userRegister}>Register</button>
//             <div>
//               { alreadyExistUser ? <div className='p-2 m-1 text-large'>Email is already registered ,please <Link to="/signin" className='text-red-500'>Login</Link> </div> : <div> </div>}
//             </div>
//         </div>
//         </div>
    
//     </>
//   )
// }

export default Signup