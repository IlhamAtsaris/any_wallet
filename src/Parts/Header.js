import React from "react";

function Header() {
  return (
    <div>
       <nav className="navbar navbar-light bg-light">
          <div className="container">
        <a href="#add" className="navbar-brand">
          AnyWallet
        </a>
        <span>Hi, username</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
