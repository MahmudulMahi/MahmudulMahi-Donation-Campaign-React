import { NavLink } from "react-router-dom";


const Navber = () => {
  return (
    <div>
      <nav className="flex justify-between justify-center items-center py-4">
      <img src="../../../../public/Resources/Logo.png" alt="" />
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
             Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
             Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
            Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navber;