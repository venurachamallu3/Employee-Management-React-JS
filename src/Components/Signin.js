import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { addLoogeduser } from '../Utilis/Loggedinuser';

const Signin = () => {


  const navigate = useNavigate();

  const dispatch = useDispatch();

  const Adminusers = useSelector((state)=>state.Users.Admins);
  // console.log("uname"+Adminusers.username)
const [c,setc]=useState(0)
  const [uname,setuname]= useState('')
  const [pwd,setpwd]= useState('')

  function checkUserLogin(){
    console.log("uanme is "+uname);
    if(Adminusers){
    const correctuser = Adminusers.find((adm)=> adm.username===uname && adm.password===pwd)

    if(correctuser){
      dispatch(addLoogeduser(uname.split('@')[0]))
    }
     return correctuser ? navigate('/'): setc(1);
     console.log("Invalid Credentails ");
    }
  

  }


  return (
    <>
    <div className='text-center m-6 p-4 font-bold text-large'>
     <div >Employee Sign-in</div>
     <p>Please Enter Credentails..</p>
     </div>
    <div className='flex justify-center'>

        <div className='p-2 m-2 h-80 bg-gray-400 w-96'>
      <label className=' text-xl'>Username:<input type='text' name='uname' onChange={(e)=>setuname(e.target.value)} className='bg-red-100 p-1 m-1'></input></label><br></br>
      <label className='text-xl'>&nbsp;Password:<input type='password' name='pwd' onChange={(e)=>setpwd(e.target.value)} className='bg-red-100 p-1 m-1 '></input></label><br></br>
<br></br>
     
     <div className='p-2 m-2'>
     <button className='bg-green-700 p-2 m-1' onClick={checkUserLogin}>Login</button>

     </div>

     <div>
      <p className='text-black-500'> If you haven't register please click to <button className='bg-orange-500'><Link to='/sign-up' >sign up</Link> </button> </p>
     </div>


      <div>
        { c>0 ? <div>Invalid Credentails</div> : <div></div>}
      </div>


    </div>

    </div>
    
    </>
  )
}

export default Signin