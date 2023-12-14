import React, { ComponentType } from "react";
import Navbar from "../../components/Navbar";

function withNavbar<T>(Component: ComponentType<T>) {
  return (hocProps: T) => {
    return (
      <div>
        <Navbar />
        <Component {...hocProps} />
      </div>
    );
  };
}

export default withNavbar;
