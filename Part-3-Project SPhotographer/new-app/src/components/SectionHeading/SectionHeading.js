import React from "react";
import "./SectionHeading.css";

const SectionHeading = ({ heading }) => {
  return (
    <div className="section-area">
      <h2 className="text-center section-area"> {heading} </h2>;
    </div>
  );
};

export default SectionHeading;
