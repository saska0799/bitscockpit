import React from "react";

const About = () => {
  return (
    <div className="container about-container d-flex justify-content-start align-items-center">
      <p className="fs-5">
        React aplikacija kreirana u svrhu pretrage Tarkett prodavnica. Projekat
        je kreiran od strane{" "}
        <strong>
          <a href="https://github.com/saska0799">Aleksandre Marinović</a>
        </strong>{" "}
        kao deo Tarkett prakse.
      </p>
    </div>
  );
};

export default About;
