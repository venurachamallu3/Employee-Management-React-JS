import React from 'react'
import logo from '../assests/logo.jfif'
import logo2 from '../assests/download.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

    const nameUser = useSelector((state)=>state.Userlog.name)
    console.log("name user is "+nameUser)


  return (

    <>
    <div className="flex justify-between bg-slate-400">
        <div > 
            <img src={logo} alt="logo1" className='w-30 h-20 p-1 m-1'></img>
        </div>
        <div className='text-3xl p-3 m-2'>EMPLOYEE MANGEMENT SYSTEM!!</div>
        <div className='flex '>
        <Link to="/"><ul className='p-3 m-3 text-xl'>Home</ul></Link>
        <Link to="/gallery"><ul className='p-3 m-3 text-xl'>Gallery</ul></Link>
        <Link to="/contact"><ul className='p-3 m-3 text-xl'>Contact us </ul></Link>
        {nameUser? <Link to="/"><ul className='p-3 m-3 text-2xl text-gray-500'>Hi {nameUser}</ul>  </Link>  : <Link to="/signin"><ul className='p-3 m-3 text-xl'>Sign In</ul>  </Link>  }
        
            
        </div>
        <div>
        <img src={logo2}  alt="logp2" className='w-34 h-20 p-2 m-1'></img>
        </div>
    </div>

    </>
)
}

export default Header