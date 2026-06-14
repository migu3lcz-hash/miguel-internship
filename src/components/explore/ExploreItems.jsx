import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExploreItemsSkeleton from "../home/ExploreItemsSkeleton";
import axios from "axios";

const ExploreItems = () => {
  const [now, setNow] = useState(Date.now());
  const [visibleItems, setVisibleItems] = useState(8);
  const [filter, setFilter] = useState("");
  const [loadingFilter, setLoadingFilter] = useState(false);
  const [exploreItems, setExploreItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  useEffect(() => {
  const fetchItems = async () => {
    try {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore"
      );

      setExploreItems(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  fetchItems();
}, []);


  const handleFilterChange = async (e) => {
    const selectedFilter = e.target.value;

    setFilter(selectedFilter);
    setLoadingFilter(true);

    try {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${selectedFilter}`,
      );
      setExploreItems(data);
      setTimeout(() => {
        setFilter(e.target.value);
        setVisibleItems(8);
      }, 500);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingFilter(false);
    }

    setLoading(false);
  };

  const getTimeRemaining = (expiryDate) => {
    const difference = expiryDate - now;

    if (difference <= 0) {
      return "";
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <div className="row" data-aos="fade-in">
      <div>
        <select value={filter} onChange={handleFilterChange} id="filter-items">
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {loading || loadingFilter
        ? Array.from({ length: 8 }).map((_, index) => {
            return <ExploreItemsSkeleton key={index} />;
          })
        : exploreItems.slice(0, visibleItems).map((items) => (
            <div
              key={items.id}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link
                    to={`/author/${items.authorId}`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    <img className="lazy" src={items.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                {items.expiryDate != null && (
                  <div className="de_countdown">
                    {getTimeRemaining(items.expiryDate)}
                  </div>
                )}

                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                      <button>Buy Now</button>
                      <div className="nft__item_share">
                        <h4>Share</h4>
                        <a href="#!" target="_blank" rel="noreferrer">
                          <i className="fa fa-facebook fa-lg"></i>
                        </a>
                        <a href="#!" target="_blank" rel="noreferrer">
                          <i className="fa fa-twitter fa-lg"></i>
                        </a>
                        <a href="#!">
                          <i className="fa fa-envelope fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link to={`/item-details/${items.nftId}`}>
                    <img
                      src={items.nftImage}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to="/item-details">
                    <h4>{items.title}</h4>
                  </Link>
                  <div className="nft__item_price">{items.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{items.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      {visibleItems < exploreItems.length && (
        <div className="col-md-12 text-center">
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={loadMore}
          >
            Load more
          </Link>
        </div>
      )}
      </div>
    </>
  );
};

export default ExploreItems;
