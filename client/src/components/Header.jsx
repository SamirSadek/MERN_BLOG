import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
const Header = () => {
    const path = useLocation().pathname
  return (
    <Navbar className=" font-mono border-b">
      <Link
        to="/"
        className="self-center Whitespace-nowrap  text-sm md:text-lg font-semibold dark:text-white text-emerald-800 uppercase rounded-full border-r-4 border-t-2 border-l-4 border-sky-600  px-2"
      >
        <span className="py-1 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-600 font-bold">
          everyday
        </span>
        SAMIR
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search Here ..."
          rightIcon={IoIosSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <IoIosSearch />
      </Button>
      <div className="flex md:order-2 gap-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link>
          <Button  outline>Sign in</Button>
        </Link>
       <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
          <Navbar.Link  className="font-semibold" active={path === '/'} as={'div'}>
            <Link to="/">Home</Link>    
          </Navbar.Link>
          <Navbar.Link  className="font-semibold" active={path === '/about'} as={'div'}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link   className="font-semibold"active={path === '/projects'} as={'div'}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
