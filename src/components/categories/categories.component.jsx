import React, { useState } from "react";
import { categoriesData } from "./categories-data";
import CategoryItem from "../category-item/category-item.component";

import "./categories.styles.scss";

function Categories() {
  const [categories, setCategories] = useState(categoriesData);
  return (
    <div className="categories-container">
      {categories.map(({ id, ...restProps }) => (
        <CategoryItem key={id} {...restProps} />
      ))}
    </div>
  );
}

export default Categories;
