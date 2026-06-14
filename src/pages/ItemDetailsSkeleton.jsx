import React from "react";

const ItemDetailsSkeleton = () => {
  return (
    <div className="row">
      <div className="col-md-6 text-center">
        <div
          className="skeleton skeleton-shimmer"
          style={{
            width: "100%",
            height: "500px",
            borderRadius: "12px",
          }}
        />
      </div>
      <div className="col-md-6">
        <div className="item-info">
          <div
            className="skeleton skeleton-shimmer skeleton-title"
            style={{ height: "40px", width: "70%" }}
          />
          <div className="d-flex mb-4">
            <div
              className="skeleton skeleton-shimmer"
              style={{
                width: "80px",
                height: "20px",
                marginRight: "16px",
              }}
            />
            <div
              className="skeleton skeleton-shimmer"
              style={{
                width: "80px",
                height: "20px",
              }}
            />
          </div>
          <div
            className="skeleton skeleton-shimmer"
            style={{
              width: "100%",
              height: "14px",
              marginBottom: "10px",
            }}
          />

          <div
            className="skeleton skeleton-shimmer"
            style={{
              width: "90%",
              height: "14px",
              marginBottom: "10px",
            }}
          />
          <div
            className="skeleton skeleton-shimmer"
            style={{
              width: "75%",
              height: "14px",
              marginBottom: "30px",
            }}
          />
          <div className="item_author mb-4">
            <div className="skeleton skeleton-shimmer skeleton-avatar" />
            <div
              className="skeleton skeleton-shimmer"
              style={{
                width: "120px",
                height: "18px",
                marginLeft: "12px",
                marginTop: "15px",
              }}
            />
          </div>
          <div className="item_author mb-4">
            <div className="skeleton skeleton-shimmer skeleton-avatar" />
            <div
              className="skeleton skeleton-shimmer"
              style={{
                width: "120px",
                height: "18px",
                marginLeft: "12px",
                marginTop: "15px",
              }}
            />
          </div>

          <div
            className="skeleton skeleton-shimmer"
            style={{
              width: "120px",
              height: "30px",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsSkeleton;
