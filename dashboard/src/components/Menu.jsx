import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selecteMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setSelectedMenu(!isProfileDropdownOpen);
  };

  const menuCLass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenClick(0)}
            >
              <p className={selecteMenu==0 ?activeMenuClass:menuCLass }>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenClick(1)}
            >
              <p className={selecteMenu==1 ?activeMenuClass:menuCLass } >Orders</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenClick(2)}
            >
              <p className={selecteMenu==2 ?activeMenuClass:menuCLass } >Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenClick(3)}
            >
              <p className={selecteMenu==3 ?activeMenuClass:menuCLass } >Positions</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Funds"
              onClick={() => handleMenClick(4)}
            >
              <p className={selecteMenu==4 ?activeMenuClass:menuCLass } >Funds</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenClick(5)}
            >
              {" "}
              <p className={selecteMenu==5 ?activeMenuClass:menuCLass } >Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        
      </div>
    </div>
  );
};

export default Menu;
