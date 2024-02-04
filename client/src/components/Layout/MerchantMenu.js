import React from "react";
import { NavLink } from "react-router-dom";
const MerchantMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Merchant Panel</h4>
          <NavLink
            to="/dashboard/merchant/products"
            className="list-group-item list-group-item-action"
          >
            All Products
          </NavLink>
          <NavLink
            to="/dashboard/merchant/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/merchant/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MerchantMenu;
