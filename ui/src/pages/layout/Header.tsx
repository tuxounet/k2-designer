import React from "react";
import reactLogo from "../../assets/react.svg";
interface HeaderProps {}
function Header(props: HeaderProps) {
  return (
    <div>
      Header
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default Header;
