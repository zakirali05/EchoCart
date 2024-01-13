import Controllers from "./controllers";
import Logo from "./logo";
import SearchInput from "./search-input";

const Navbar = async() => {
  return <nav className="flex items-center justify-between p-2 border-b">
   <Logo href="/logo.jpg" title="EchoCart"/>
   <SearchInput/>
   <Controllers />
  </nav>;
};

export default Navbar;
