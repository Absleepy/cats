import React from "react";
import "./loading.css";
const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner-box">
        <div className="leo-border-1">
          <div className="leo-core-1"></div>
        </div>
        <div className="leo-border-2">
          <div className="leo-core-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
