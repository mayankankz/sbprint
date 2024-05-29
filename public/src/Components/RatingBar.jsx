import React, { useState } from "react";

export default RatingBar = ({ stars, percentage, color }) => (
  <div className="d-flex align-items-center mb-2">
    <div className="text-nowrap me-3">{stars} Star</div>
    <div className="w-100">
      <Progress value={percentage} color={color} style={{ height: "5px" }} />
    </div>
    <span className="text-muted ms-3">{percentage}%</span>
  </div>
);
