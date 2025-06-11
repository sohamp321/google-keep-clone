import React from "react";

function Header() {
  const year = new Date().getFullYear();
  return <footer>Copyright {year}</footer>;
}

export default Header;
