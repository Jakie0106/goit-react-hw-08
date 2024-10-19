import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex gap-4 items-center">
      <NavLink className="text-white text-xl" to="/">
        Home
      </NavLink>
      <NavLink className="text-white text-xl" to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
