import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <header>
      <h1 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Noootes</span>
        <span style={{ fontSize: '0.6em' }}>By Soham Parikh</span>
      </h1>
    </header>
  );
}

export default Header;
