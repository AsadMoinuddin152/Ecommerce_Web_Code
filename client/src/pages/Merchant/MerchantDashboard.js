import React from "react";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import MerchantMenu from "./../../components/Layout/MerchantMenu";
const MerchantDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid  p-3">
        <div className="row">
          <div className="col-md-3">
            <MerchantMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Merchant Name : {auth?.user?.name}</h3>
              <h3> Merchant Email : {auth?.user?.email}</h3>
              <h3> Merchant Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MerchantDashboard;
