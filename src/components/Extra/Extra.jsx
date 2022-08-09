import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./extra.scss";

const Extra = () => {
   return (
      <div className='extra w-100 p-4 bg-info'>
         <nav className="w-75 mx-auto  mt-4 bg-light">
            <ul className="d-flex justify-content-center align-items-center ">
               <li>
                  <NavLink to="/extra/profile" className={({isActive})=> isActive ?
                   "btn btn-success " : "btn waves-effect red"}>Profile</NavLink>
               </li>
               <li>
                  <NavLink to="/extra/setting" className={({isActive})=> isActive ?
                   "btn btn-success " : "btn waves-effect red"}>Setting</NavLink>
               </li>
            </ul>
         </nav>

       <Outlet/>

      </div>
   );
};

export default Extra;