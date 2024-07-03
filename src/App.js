import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Body from './Components/Body';
import Signin from './Components/Signin';
import StudentDetail from './Components/EmployeeCard';
import EmployeeDetail from './Components/EmployeeDetail';
import AddEmployee from './Components/AddEmployee';
import EmpNotFound from './Components/EmpNotFound';
import Signup from './Components/Signup';




export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};




const appRoute = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/gallery',
        element:<Gallery/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/signin',
        element:<Signin/>
      },
      {
        path:'/sign-up',
        element:<Signup/>
      },
      {
        path: '/employee/:id',
        element: <EmployeeDetail />
      },
      {
        path:'/add-employee',
        element:<AddEmployee/>
      }
    ]
    // errorElement:<EmpNotFound/>
  }
  // {
  //   path:'/employee/:id',
  //   element:<EmployeeDetail/>
  // }
])


function App (){
  return(
    <>
    <RouterProvider router={appRoute}/>
    </>

  )
}


export default App;