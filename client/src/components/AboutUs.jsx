import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt repudiandae vero, voluptatem voluptate inventore commodi aspernatur fuga dignissimos a fugiat, dolore architecto? Aperiam reprehenderit sint dolor quae sunt sequi quas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
