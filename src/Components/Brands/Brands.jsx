import React from "react";
import "./Brands.css";

// import brands from data
import { brandsData } from "../../Data/Data";

export default function Brands() {
  return (
    <div>
      <div className="Brands">
        <div className="container brands-container">
          {brandsData.map(({ img }, index) => {
            return (
              <div className="brand" key={index}>
                <img src={img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
