import React from "react";
import { Navbar } from "../component/navbar";
import "../../styles/home.css";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="data-card container rounded bg-secondary text-light">
        <div className="row my-3">
          <div className="col-12 col-lg-3 d-flex justify-content-center">
            <img
              src=""
              className="home-image rounded mx-3 my-3"
            />
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <span className="my-4 text-home">WELCOME TO MY FIRST LOGIN </span>
          </div>
          <div className="col-12 col-lg-3 d-flex justify-content-center">
            <img
              src=""
              className="home-image rounded mx-3 my-3"
            />
          </div>
        </div>
      </div>
      <div className="data-card container rounded bg-secondary text-light d-flex justify-content-center">
        <span className="my-3">
          Please press the button register to test the authentification.
        </span>
      </div>
    </>
  );
};

