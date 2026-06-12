import React from "react";

const AuthorItemsSkeleton = () => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
      <div className="nft__item skeleton-item">
        <div className="author_list_pp">
          <div className="author_pp_skeleton">
            <div className="skeleton skeleton-avatar skeleton-shimmer"></div>
          </div>
        </div>
        <div className="skeleton skeleton-image skeleton-shimmer"></div>
        <div className="nft__item_info">
          <div className="skeleton skeleton-title skeleton-shimmer"></div>
          <div className="skeleton skeleton-price skeleton-shimmer"></div>
          <div className="skeleton skeleton-likes skeleton-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default AuthorItemsSkeleton;
