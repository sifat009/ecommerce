import React, { useState } from "react";
import { categoriesData } from "./categories-data";
import SingleItem from "../single-item/single-item.component";

import "./categories.styles.scss";

function Categories() {
  const [categories, setCategories] = useState(categoriesData);
  return (
    <div className="categories-container">
      {categories.map(({ id, ...restProps }) => (
        <SingleItem key={id} {...restProps} />
      ))}
    </div>
  );
}

export default Categories;
