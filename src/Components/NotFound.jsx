import React from "react-router-dom";
import { useNavigate } from "react-router-dom";
import image from "./error.png"

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>The URL you entered was not found</h1>
      <img src={image} alt="" className="image"/><br /><br />
      <button
        onClick={() => {
          navigate("/");
        }} className="Kodak"
      >
        Return Home
      </button>
    </div>
  );
};

export default NotFound;
