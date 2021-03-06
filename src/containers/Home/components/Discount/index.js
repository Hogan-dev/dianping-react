import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Discount extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="discount">
        <a className="discount_header">
          <span className="discount_title">超值特惠</span>
          <span className="discount_more">更多优惠</span>
          <span className="discount_arrow"></span>
        </a>
        <div className="discount_content">
          {data.map((item, index) => {
            return (
              <Link
                to={`/detail/${item.id}`}
                key={item.id}
                className="discount_item"
              >
                <div className="discount_itemPic">
                  <img alt="" width="100%" height="100%" src={item.picture} />
                </div>
                <div className="discount_itemTitle">{item.shop}</div>
                <div className="discount_itemPriceWrapper">
                  <ins className="discount_itemCurrentPrice">
                    {item.currentPrice}
                  </ins>
                  <del className="discount_itemOldPrice">{item.oldPrice}</del>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Discount;
