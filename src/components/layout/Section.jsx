import React from "react";

const baseContainer =
  "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const Section = ({ id, className = "", innerClassName = "", children }) => {
  return (
    <section
      id={id}
      className={`py-16 ${className}`}
    >
      <div className={`${baseContainer} ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;

