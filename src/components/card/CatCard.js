import React from "react";
import { Link } from "react-router-dom";

const CatCard = ({ cats }) => {
  return (
    <div className="cat_card">
      {cats?.map((cat) => (
        <Link
          to={`/images/${cat?.reference_image_id}`}
          className="bg-primary d-flex flex-column"
          key={cat?.id.toString()}
        >
          <div className="card-image">
            <img src={cat?.image?.url} width="100%" alt="tesst" />
          </div>
          <div className="cat-name-container d-flex justify-between">
            <p className="catName c-white">{cat?.name ?? "Beautiful cat"}</p>
            <span className="c-white">{cat?.origin ?? "US"}</span>
          </div>
          <div className="cat-desc">
            <p className="c-white two-line-text" title={cat?.description ?? ""}>
              {cat?.description ?? ""}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CatCard;
