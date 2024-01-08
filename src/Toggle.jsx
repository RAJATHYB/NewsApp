import React from "react";
import { Link } from "react-router-dom";

const Toggle = () => {
  return (
    <nav>
      <button>
        <Link to={"/"} className="btnLink">
          Home
        </Link>
      </button>
      <button>
        <Link to={"/tech"} className="btnLink">
          Tech
        </Link>
      </button>
      <button>
        <Link to={"/business"} className="btnLink">
          Business
        </Link>
      </button>
      <button>
        <Link to={"/apple"} className="btnLink">
          Apple
        </Link>
      </button>
    </nav>
  );
};

export default Toggle;
