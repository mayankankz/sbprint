import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ title, description, backgroundColor, iconClass }) => {
  return (
    <div className="border border-dark bg-dark p-6 rounded-4 f-icon-hover">
      <div
        className="mb-4 rounded f-icon-shape-sm"
        style={{ backgroundColor: backgroundColor }}
      >
        <i className={`${iconClass} fs-1 text-dark`}></i>
      </div>
      <div>
        <h5 className="mb-3 text-white">{title}</h5>
        <p className="mb-4 text-light">{description}</p>
        <Link to="/" className="btn-arrow"></Link>
      </div>
    </div>
  );
};
export default CardComponent;
