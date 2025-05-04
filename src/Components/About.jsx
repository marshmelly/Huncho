import React from 'react'
import nely from "./nely.jpeg"
import fb from "./fb.jpeg"


const about = () => {
  return (
    <div>
      <div className="pip">
        <h1>About Nelly</h1>

        <h2 className=" text-dark">
          Nelly was a determined Barber when he was young, and loved to do
          peoples hair. He had a dream of opening a barbershop that would make
          men lool more exucutive, in 1894 he opened his first barber shop. Even
          though it was not as successful at a go he took his time and made it
          through the industry. Now there are more than 50 branches worldwide
          and it is a success. THank you Nelly for enabling people to look at
          their best.
        </h2>

        <h3>You can find us on all social media platforms</h3>
        <img src={fb} alt="" /> <br />
      </div> <br />
      <img src={nely} alt="" className="nely" />
    </div>
  );
}

export default about
