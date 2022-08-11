import React from "react";
import { NavLink , useNavigate } from "react-router-dom";
const Navbar = ({setAuth,useAuth}) => {

  const out=useNavigate();

  return (
    <>
      <nav>
        <div className="nav-wrapper bg-success">
          <NavLink to="/" className="brand-logo ms-5">
            REACT-APP
          </NavLink>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/" className={({isActive})=> isActive ?  "text-light link_active" : "text-light"}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/list"className={({isActive})=> isActive ?  "text-light link_active" : "text-light"}>
                Lists
              </NavLink>
            </li>
            <li>
              <NavLink to="/extra" className={({isActive})=> isActive ?  "text-light link_active" : "text-light"}>
                Extra 
              </NavLink>
            </li>

            <li>
              <button className="btn btn-light me-4" onClick={()=>{
                return(
                  out('/login')
                )
              }}>
                log out
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
