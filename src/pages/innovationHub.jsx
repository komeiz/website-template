import React, { Component } from "react";
import Navbar2 from "../components/navbar2.jsx";
import "../cssFolder/innovationHub.css";
import laptopcode from "../images/laptopcode.svg";
import bglaptop from "../images/bg-laptop.png";
import Footer from "../components/footer.jsx";
import Breadcrumb from "../components/breadCrumb.jsx";

class InnovationHub extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar2 />
        <Breadcrumb pageTitle="Home" pageSubtitle="Innovation hub" />
        <div className=" jumbo jumbo-bg d-flex justify-content-center align-items-center ">
          <div className="">
            <div className="container">
              <div className=" bg-img-col ">
                <h2 className="text-white  text-center">
                  Professionally delivered bespoke services
                </h2>

                <div className="row row-bg-lap">
                  <div className="col-md-4 col-sm-6">
                    <img src={laptopcode} className="w-75" alt="" />
                  </div>
                  <div className="col-md-8 col-sm-6">
                    <h6>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci repellendus eum, corporis ipsum temporibus facere
                      esse non autem est optio? Aliquam repellendus iure ea
                      earum vitae distinctio non nulla nam.
                    </h6>
                    <p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Blanditiis, distinctio voluptatem neque similique
                        iste vel modi quibusdam? Aliquid natus dignissimos
                        debitis, enim a dolorum velit distinctio saepe maxime
                        neque dolorem. re designs, integration to service
                        management, to solution evaluation and documentation.
                      </p>
                    </p>
                    <div className="btns">
                      <button className="btn btn-outline-primary mr-1 ">
                        Get in Touch
                      </button>
                      <button className="btn btn-warning ml-1">
                        {" "}
                        Visit The Hub
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="security-p-sec d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row security-gen-texts">
              <div className="col-md-6 sec-pro-list">
                <h2>Why You Need A Security Protection Today</h2>
                <ul>
                  <li>Total Network protection</li>
                  <li> Increased network performance</li>
                  <li> Real time Network threat detection</li>
                  <li> Centralized control, and visibility</li>
                  <li>Management Advanced Persistent Threat Protection</li>
                  <li>Zero Day Attacks and vulnerability protection</li>
                  <li>Secured data in transition</li>
                </ul>
              </div>

              <div className="col-md-6 text-center">
                <div className="secur-card-check">
                  <img src={bglaptop} className="bg-lap w-75" alt="" />
                  <p>
                    <b>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      illum at placeat a corrupti obcaecati dicta vel dolor eos
                      nostrum malware and password attacks.
                    </b>
                  </p>
                  <button className="btn btn-primary">
                    Get Free Security Check
                  </button>
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

export default InnovationHub;
