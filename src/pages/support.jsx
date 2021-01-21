import React, { Component } from "react";
import Navbar2 from "../components/navbar2.jsx";
import "../cssFolder/support.css";
import Footer from "../components/footer.jsx";
import Breadcrumb from "../components/breadCrumb.jsx";

class Support extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar2 />
        <Breadcrumb pageTitle="Home" pageSubtitle="Support and services" />
        <div className="support-topics ">
          <div className="container d-flex align-items-center justify-content-center p-5">
            <div className="topic-supprt-content">
              <h2 className="text-primary text-center">Support</h2>
              <p className="text-center">
                How important is our customers’ satisfaction to us?
                <br />
                It means everything…From the closing of sales, implementation,
                after sales and beyond.
              </p>
              <div className="topics pt-5">
                <h3 className="text-center pb-5">Topics</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                  <div className="col-md-6">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Support;
