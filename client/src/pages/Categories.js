import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import Spinner from "../components/Spinner";
import "../styles/CategoriesPage.css"; // Import the CSS file

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const categories = useCategory();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second delay (replace with actual API fetch)
  }, []);

  return (
    <Layout title={"All Categories"}>
      <div className="container categories-page">
        {loading ? (
          <Spinner path="category" />
        ) : (
          <div className="row">
            {categories.map((c) => (
              <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
                <Link to={`/category/${c.slug}`} className="category-button">
                  {c.name.toUpperCase()}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Categories;
