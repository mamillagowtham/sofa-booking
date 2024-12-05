import React,{useState} from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";




const themes ={
  winter : "winter",
  dracula :"dracula",  
}

const Navbar = () => {
  const [theme, setTheme] = useState(themes.winter);

   const handleTheme = ()=>{
    const {winter, dracula} =themes;
     const newTheme = theme === winter? dracula : winter;
     document.documentElement.setAttribute("data-theme",newTheme)
    setTheme(newTheme);
   }

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* {title} */}
          <NavLink to="/" className="hidden lg:flex btn btn-primary text-3xl">
            store
          </NavLink>
          {/* {Dropdown} */}
          <div className="dropdown">
            <label className="btn btn-ghost lg:hidden">
              <FaBarsStaggered tabIndex={0} className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-16 z-[1] p-2 shadow  bg-base-200 rounded-box w-50"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* theme setup */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* sun */}
            <BsSunFill className= "swap-on h-6 w-6"/>
            {/* moon */}
            <BsMoonFill className= "swap-off h-6 w-6"/>

          </label>
          {/* cart link */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="indicator-item badge badge-sm badge-primary">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
