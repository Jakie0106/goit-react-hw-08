import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={() => dispatch(logout())} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
