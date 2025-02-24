import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

    const toogleLinks = ()=>{
        setShowLinks(!showLinks)
    }

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo empresa" />
          <button onClick={toogleLinks} className="nav-toggle">
            <FaBars />
          </button>
        </div>

        <div className={showLinks ? 'links-container show-container': 'links-container'}>
        <ul className="links">
          
              {links.map((link) => {
                return <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                    </li>;
              })}
            
              {/* {social.map((icon) => {
                return <li key={icon.id}>{icon.icon}</li>;
              })} */}
            
        </ul>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
