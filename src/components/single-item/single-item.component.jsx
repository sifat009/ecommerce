import React, { useState, Fragment } from "react";
import "./single-item.styles.scss";

function SingleItem({ title, imageUrl, price }) {
  const [favourite, setFavourite] = useState(false);
  const [showQuantityController, setShowQuantityController] = useState(false);

  return (
    <div className="product_item">
      <div className="product_image-wrapper">
        <span
          className={`product_love fas fa-heart ${favourite && "active"}`}
          onClick={() => setFavourite(!favourite)}
        ></span>
        <div
          className="product_image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <div className="product_content">
        {!price ? (
          <span className="product_name">{title}</span>
        ) : (
          <Fragment>
            <div className="product_info">
              <span className="product_name">{title}</span>
              <span className="product_price">
                <span className="price_sign">$</span>
                <span className="price_number">{price}</span>
              </span>
            </div>
            {!showQuantityController && (
              <div
                className="product_buy"
                onClick={() =>
                  setShowQuantityController(!showQuantityController)
                }
              >
                Buy
              </div>
            )}
            {showQuantityController && (
              <div className="product_quantity-wrapper">
                <span className="minus">&#8722;</span>
                <span className="product_quantity">10</span>
                <span className="plus">+</span>
              </div>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default SingleItem;
