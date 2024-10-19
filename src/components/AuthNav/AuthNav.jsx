import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="flex gap-4 items-center">
      <NavLink className="text-white text-xl" to="/register">
        Register
      </NavLink>
      <NavLink className="text-white text-xl" to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
