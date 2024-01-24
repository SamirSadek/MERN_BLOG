import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch()
  const {currentUser} = useSelector(state => state.user)
  const {theme} = useSelector(state => state.theme)
  console.log(currentUser);
  return (
    <Navbar className=" font-mono border-b border-sky-100">
      <Link
        to="/"
        className="self-center Whitespace-nowrap  text-sm md:text-lg font-semibold dark:text-white text-emerald-800 uppercase rounded  border-sky-600  p-1"
      >
        <span className="py-1 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-600 font-bold">
          everyday
        </span>
        SAMIR
      </Link>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <IoIosSearch />
      </Button>
      <div className="flex md:order-2 gap-2">
        <form>
          <TextInput
            type="text"
            placeholder="Search Here ..."
            rightIcon={IoIosSearch}
            className="hidden lg:inline"
          />
        </form>
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill onClick={()=>dispatch(toggleTheme())}>
          {
            theme === 'light' ? <FaSun/> : <FaMoon/>
          }
         
        </Button>
        {currentUser ? (
          <Dropdown arrowIcon={false} inline
          label={
            <Avatar  alt="user"  img={currentUser.profilePicture} rounded/>
          }
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentUser.username}</span>
              <span className="block text-sm font-semibold truncate">{currentUser.email}</span>
            </Dropdown.Header>
            <Link to='/dashboard?tab=profile'>
              <Dropdown.Item>
                Profile
              </Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Link>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button outline>Sign in</Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="font-semibold" active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link
          className="font-semibold"
          active={path === "/about"}
          as={"div"}
        >
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link
          className="font-semibold"
          active={path === "/projects"}
          as={"div"}
        >
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
