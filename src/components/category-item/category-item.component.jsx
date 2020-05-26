import React, { useState } from "react";
import "./category-item.styles.scss";

function CategoryItem({ name, image }) {
  const [favourite, setFavourite] = useState(false);

  return (
    <div className="product_item">
      <div className="product_image-wrapper">
        <span
          className={`product_love fas fa-heart ${favourite && "active"}`}
          onClick={() => setFavourite(!favourite)}
        ></span>
        <div
          className="product_image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="product_content">
        <span className="product_name">{name}</span>
      </div>
    </div>
  );
}

export default CategoryItem;
