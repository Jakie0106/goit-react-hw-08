import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  return (
    <div className="w-full flex justify-between">
      <Navigation />
      <UserMenu />
      <AuthNav />
    </div>
  );
};

export default AppBar;
