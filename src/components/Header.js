import React from "react";
import Search from "./Search";

function Header({handleSearch, search}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
      search={search}
      handleSearch={handleSearch}
      />
    </header>
  );
}

export default Header;
