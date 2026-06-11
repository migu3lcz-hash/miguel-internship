import React from "react";

const TopSellersSkeleton = () => {
  return (
    <li className="author_list">
      <div className="author_list_pp skeleton-shimmer"> 
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
      </div>

      <div className="author_list_info skeleton-shimmer">
        <div
          style={{
            width: "120px",
            height: "18px",
            marginBottom: "8px",
            borderRadius: "4px",
          }}
        />

        <div
          style={{
            width: "80px",
            height: "14px",
            borderRadius: "4px",
          }}
        />
      </div>
    </li>
  );
};

export default TopSellersSkeleton;
