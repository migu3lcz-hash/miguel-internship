import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AuthorSkeleton from "./AuthorSkeleton";

const Author = () => {
  const { id } = useParams();
  const [authorDataItems, setAuthorDataItems] = useState([])
  const [authorItems, setAuthorItems] = useState([])
  const [followers, setFollowers] = useState(0)
  const [isFollowing, setIsFollowing] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleFollow = () => {
    if (isFollowing) return;

    setFollowers(prevFollowers => prevFollowers + 1)
    setIsFollowing(true)
  }

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`)

        setAuthorDataItems(data.nftCollection)
        setAuthorItems(data)
        setFollowers(data.followers)
      }catch (error) {
        console.log(error)
      }finally {
        setLoading(false)
      }
    }

    fetchItems()
  },[id])

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {loading ? (<AuthorSkeleton />
                ) : (<div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={authorItems.authorImage} alt="" />

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {authorItems.authorName}
                          <span className="profile_username">@{authorItems.tag}</span>
                          <span id="wallet" className="profile_wallet">
                            {authorItems.address}
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">{followers} followers</div>
                      <Link to="#" className="btn-main" onClick={handleFollow}>
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>)}
                
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems authorDataItems={authorDataItems} loading={loading} authorImage={authorItems.authorImage}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
