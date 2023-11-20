import React from "react";

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  return (
    <div className="flex justify-center fixed z-10 top-6 left-6 right-6">
      <nav className="flex max-w-lg w-full px-4 justify-between h-10 items-center border-4 border-black bg-white ">
        <h1 className="font-bold">Daniel Olufayokunmi</h1>
        <button className="font-bold">Menu</button>
      </nav>
    </div>
  );
};
export default Nav;
