import React from "react";
import SingleItem from "../single-item/single-item.component.jsx";

import "./collection-list.styles.scss";

function CollectionList({ title, items }) {
  return (
    <div className="collection-list">
      <div className="collection-name">{title.toUpperCase()}</div>
      <div className="collection-items categories-container">
        {items
          .filter((_, index) => index < 4)
          .map(({ id, ...restParams }) => (
            <SingleItem key={id} {...restParams} />
          ))}
      </div>
    </div>
  );
}

export default CollectionList;
