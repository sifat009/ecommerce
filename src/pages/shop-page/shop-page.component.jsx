import React, { Component, Fragment } from "react";
import { shopData } from "./shop-data";
import CollectionList from "../../components/collection-list/collection-list.component.jsx";
import "./shop-page.styles.scss";

export class ShopPage extends Component {
  constructor() {
    super();
    this.state = { collections: shopData };
  }

  render() {
    const { collections } = this.state;

    return (
      <Fragment>
        <div className="shop-page-title">Collections</div>
        {collections.map(({ id, ...restParams }) => (
          <CollectionList key={id} {...restParams} />
        ))}
      </Fragment>
    );
  }
}

export default ShopPage;
