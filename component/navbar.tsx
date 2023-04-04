import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface NavbarProps {
  currentTheme: string;
  handleClick: () => void;
}
const Navbar = (props: NavbarProps) => {
  const [popUp, setPopUp] = useState(false);
  const toggle = () => {
    setPopUp(!popUp);
  };
  let path = `${props.currentTheme}.svg`;
  let menu = `${props.currentTheme}menu.svg`;
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link href="/" className="link">
            M3
          </Link>
        </div>
        <div className="icon">
          {!popUp && (
            <>
              <Image
                onClick={props.handleClick}
                src={path}
                alt="theme"
                width="20"
                height="20"
              />
              <Image
                onClick={toggle}
                src={menu}
                alt="theme"
                width="40"
                height="40"
              />
            </>
          )}
          {popUp && (
            <div className="modal">
              <div className="modal-content">
                <button onClick={toggle}>X</button>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
