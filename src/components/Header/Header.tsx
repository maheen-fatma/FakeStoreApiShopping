import { NavLink } from "react-router-dom";

function Header() {
    
    
    return (
      <>
      <header className="drop-shadow-md shadow-slate-300  sticky  z-50 top-0 bg-white">
            <div className="flex flex-row justify-between items-center h-24 sm:pr-24 px-24  ">
            
            <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-12 "
                            alt="Logo"
                        />
            
             
            
            <div className="flex flex-row text-xl justify-between font-bold items-center">
              Filter Categories:
                    <ul className="flex flex-row justify-between items-center">
                        <li className=" ml-16 font-medium ">
                            <NavLink to="/" className={({isActive})=> `${isActive? "text-orange-500" : "text-gray-700"} `}> 
                              All 
                            </NavLink>
                        </li>
                        <li className=" ml-16 font-medium ">
                            <NavLink to="/men's clothing" className={({isActive})=> `${isActive? "text-orange-500" : "text-gray-700"} `}> 
                              Men
                            </NavLink>
                        </li>
                        <li className=" ml-16 font-medium ">
                            <NavLink to="/women's clothing" className={({isActive})=> `${isActive? "text-orange-500" : "text-gray-700"} `}> 
                              Women
                            </NavLink>
                        </li>
                        <li className=" ml-16 font-medium ">
                            <NavLink to="/jewelery" className={({isActive})=> `${isActive? "text-orange-500" : "text-gray-700"} `}> 
                              Jewellery
                            </NavLink>
                        </li>
                        <li className=" ml-16 font-medium ">
                            <NavLink to="/electronics" className={({isActive})=> `${isActive? "text-orange-500" : "text-gray-700"} `}> 
                              Electronics
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row justify-between items-center">
                   hi
                </div>
            </div>   
        </header>
      </>
    )
  }
  
  export default Header;