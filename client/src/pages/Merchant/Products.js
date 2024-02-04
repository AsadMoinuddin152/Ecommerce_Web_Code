import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import MerchantMenu from "../../components/Layout/MerchantMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //Get All Products
  const getALlProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-products");
      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting products");
    }
  };

  //LifeCycle Method
  useEffect(() => {
    getALlProducts();
  }, []);
  return (
    <Layout>
      <div className="container-fluid  p-3">
        <div className="row">
          <div className="col-md-3">
            <MerchantMenu />
          </div>
          <div className="col-md-9">
            <h2 className="text-center jumbotron">Products List</h2>
            <div className="row">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="col-md-4 col-sm-6 col-xs-12 p-1"
                >
                  <Link
                    to={`/dashboard/merchant/product/${product.slug}`}
                    className="product-link"
                  >
                    <div
                      className="card shadow rounded"
                      style={{ height: "100%", transform: "scale(0.9)" }}
                    >
                      <img
                        src={`/api/v1/product/product-photo/${product._id}`}
                        alt={product.name}
                        className="card-img-top"
                        style={{ height: "auto", objectFit: "contain" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {product.name}
                        </h5>
                        <p className="card-text text-center">
                          {product.description}
                        </p>
                        <p className="card-text text-center">
                          Price: ₹ {product.price} | Quantity:{" "}
                          {product.quantity}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
