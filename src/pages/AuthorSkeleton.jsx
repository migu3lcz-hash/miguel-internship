import React from "react";

const AuthorSkeleton = () => {
  return (
    <div className="d_profile de-flex">
      <div className="de-flex-col">
        <div className="profile_avatar">
          <div className="skeleton skeleton-shimmer author-skeleton-avatar"></div>
          <div className="profile_name">
            <div
              className="skeleton skeleton-shimmer"
              style={{
                width: "220px",
                height: "28px",
                marginBottom: "10px",
              }}
            ></div>
            <div
              className="skeleton skeleton-shimmer"
              style={{
                width: "140px",
                height: "18px",
                marginBottom: "10px",
              }}
            ></div>
            <div
              className="skeleton skeleton-shimmer"
              style={{
                width: "450px",
                height: "18px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="profile_follow de-flex">
        <div className="de-flex-col">
          <div
            className="skeleton skeleton-shimmer"
            style={{
              width: "120px",
              height: "20px",
              marginBottom: "12px",
            }}
          ></div>
          <div
            className="skeleton skeleton-shimmer"
            style={{
              width: "100px",
              height: "40px",
              borderRadius: "6px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AuthorSkeleton;
