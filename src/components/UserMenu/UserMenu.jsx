import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import SearchBox from "../SearchBox/SearchBox";
import toast from "react-hot-toast";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout())
      .then(() => {
        toast.success(`Bye ${user.name}`);
      })
      .catch(() => {
        toast.error("Failed");
      });
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="flex items-center gap-4 space-x-10">
      <SearchBox />
      {isLoggedIn && <p className="text-xl">Welcome, {user.name}!</p>}
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
