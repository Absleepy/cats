import React from "react";
import { Link } from "react-router-dom";

const CatCard = ({ cats }) => {
  console.log(cats);
  return (
    <div className="cat_card">
      {cats?.map((cat) => (
        <Link
          to={`/images/${cat?.reference_image_id ?? cat.id}`}
          className="bg-primary d-grid flex-column"
          key={cat?.id.toString()}
        >
          <div className="card-image d-grid">
            <img src={cat?.image?.url ?? cat?.url} width="100%" alt="tesst" />
          </div>
          {cat?.name && (
            <div className="cat-name-container d-grid grid-2-col">
              <p className="catName c-white">{cat?.name ?? ""}</p>
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
      ))}
    </div>
  );
};

export default CatCard;
