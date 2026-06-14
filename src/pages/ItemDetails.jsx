import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ItemDetailsSkeleton from "./ItemDetailsSkeleton.jsx";

const ItemDetails = () => {
  const { nftId } = useParams();
  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`)

        setItemDetail(response.data)
        console.log(response.data)
      }catch(error) {
        console.log(error)
      }finally {
        setLoading(false)
      }
    }


  fetchDetails()
  },[nftId])


  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container" data-aos="fade-in" data-aos-delay="50">
            {loading ? (<ItemDetailsSkeleton />) : <div className="row">
                  <div className="col-md-6 text-center">
                  <img
                  src={itemDetail.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>{itemDetail.title}</h2>
                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye">
                        {itemDetail.views}
                      </i>
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {itemDetail.likes}
                    </div>
                  </div>
                  <p>
                   {itemDetail.description}
                  </p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${itemDetail.ownerId}`}>
                            <img className="lazy" src={itemDetail.ownerImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${itemDetail.authorId}`}>{itemDetail.ownerName}</Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${itemDetail.creatorId}`}>
                            <img className="lazy" src={itemDetail.creatorImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${itemDetail.creatorId}`}>{itemDetail.creatorName}</Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="" />
                      <span>{itemDetail.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
