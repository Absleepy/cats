import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {addToWish} from '../../utils/addToWIsh';
const CatCard = ({ cats }) => {
   const [heart, setHeart] = useState([])
   const [wl, setwl] = useState([])
   let inWish = false;
 
  
   useEffect(() =>{
    const wishList = JSON.parse(localStorage.getItem('wishList')) ?? [];
      setwl(wishList) 
    
   },[])

   useEffect(() =>{
    let ids = [];
    wl.map(wish => ids.push(wish.id));
    setHeart(ids)
   },[wl])

   const handleToWishList = (cat) =>{
    const wishList = JSON.parse(localStorage.getItem("wishList")) || [];

    let catInWish = false;
  
    wishList.map((wish) => {
      if (wish.id === cat.id) {
        catInWish = true;
      }
    });
    let wishCat = [];
    // if true
    //remove cat item from wishlist
    if (catInWish) {
      wishCat = wishList.filter((item) => item.id !== cat.id);
    }
    //if false
    // add cat item to wishlist
    else {
      wishCat = [...wishList, cat];
    }
    localStorage.setItem("wishList", JSON.stringify(wishCat));
    setwl(wishCat) 
   }

    
 
   
   
   return (
      <div className="cat_card">
        {cats?.map((cat) => (
          <div className="bg-primary d-grid flex-column positionRelative">
            <div onClick={() => {
              handleToWishList(cat) 
            }} className="wishIcon">
              <span>{heart.includes(cat.id) ? "❤️" : "🤍"}</span>
            </div>
          <Link
            to={`/images/${cat?.reference_image_id ?? cat.id}`}
          
            key={cat?.id.toString()}
          >
            
            <div className="card-image d-grid">
              <img src={cat?.image?.url ?? cat?.url} width="100%" alt="tesst" />
            </div>
            {cat?.name && (
              <div className="cat-name-container d-grid grid-2-col">
                <p className="one-line-text catName c-white">
                 
                 {cat?.name ?? ""}
               
               </p>
                <span className="c-white">{cat?.origin ?? ""}</span>
              </div>
            )}
            <div className="cat-desc">
              {cat?.description && (
                <p
                  className="c-white two-line-text"
                  title={cat?.description ?? ""}
                >
                  {cat?.description ?? ""}
                </p>
              )}
            </div>
          </Link>
          </div>
        ))}
      </div>
    );
};

export default CatCard;
