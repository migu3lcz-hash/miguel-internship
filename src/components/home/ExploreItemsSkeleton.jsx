import React from "react";

const ExploreItemsSkeleton = () => {
  return (
    <div
      className="d-item col-lg-3 cold-md-6 col-sm-6 col-xs-12"
      style={{ display: "block" }}
    >
      <div className="nft_item">
        <div className="author_list_pp">
          <div className="skeleton-shimmer skeleton-avatar"></div>
        </div>
        <div className="skeleton-shimmer skeleton-countdown"></div>
        <div className="nft__item_wrap">
          <div className="skeleton-shimmer skeleton-image"></div>
        </div>
        <div className="nft__item_info">
          <div className="skeleton-shimmer skeleton-title"></div>
          <div className="skeleton-shimmer skeleton-price"></div>
          <div className="skeleton-shimmer skeleton-likes"></div>
        </div>
      </div>
    </div>
  );
};

export default ExploreItemsSkeleton;
