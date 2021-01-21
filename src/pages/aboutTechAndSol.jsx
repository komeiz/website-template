import React, { Component } from "react";
import Navbar2 from "../components/navbar2.jsx";
import Breadcrumb from "../components/breadCrumb.jsx";
import bgpadlock from "../images/abouttopbg.png";
import "../cssFolder/aboutTechAndSol.css";
import winnerlogo from "../images/winnerlogo.svg";
import Footer from "../components/footer.jsx";
class AboutTechAndSol extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar2 />
        <Breadcrumb pageTitle="Home" pageSubtitle="About Us" />

        <div className="container">
          <div className="bg-descrp pt-5 mb-5">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-4 col-sm-6 descp-contain-ov">
                <div className="descp-con ">
                  <div className="container">
                    <h3>
                      caramel Technologies and Solutions Limited (a member of
                      Flexip Group)
                    </h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      illum at placeat a corrupti obcaecati dicta vel dolor eos
                      nostrum Mobility, Infrastructure solutions and services
                      that deliver unparalleled competitive advantage and
                      business agility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-6 bg-descp-background">
                <img className="pdlock-img" src={bgpadlock} alt="" />
              </div>
            </div>
          </div>

          <div className="approach pt-5 mb-5">
            <h5 className=" text-center fp-approach-head">
              The caramel approach is not to sell individual technology
              products, hence, the solution areas described above. Our strategy
              is Lorem ipsum dolor sit amet consectetur adipisicing elit. illum
              at placeat a corrupti obcaecati dicta vel dolor eos nostrum .
            </h5>

            <div className="row text-secondary pt-5">
              <div className="col-md-6">
                <p>
                  {" "}
                  Strategic alliances with leading technology leaders like
                  Microsoft, HP, IBM, Checkpoint, Citrix, C Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. illum at placeat a
                  corrupti obcaecati dicta vel dolor eos nostrum Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. illum at placeat
                  a corrupti obcaecati dicta vel dolor eos nostrum{" "}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur iusto magnam dicta quam explicabo ut fugit
                  reprehenderit impedit? Nisi eos reprehenderit vero atque.
                  Doloribus inventore illo rem unde quos ducimus?
                </p>
              </div>
            </div>
          </div>

          <div className="trusted-partners  p-5 mb-5">
            <h2 className="tp-title">Trusted Partners</h2>

            <h5 className="tp-descrp">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ab
              iure minus sequi mollitia quas illum nulla quae! Ad at mollitia
              fugiat natus porro facere placeat, autem vitae adipisci
              laboriosam.
            </h5>

            <p className="tp-text text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, rerum repellat! Optio in autem reprehenderit quisquam
              maiores, sit quasi, error, id reiciendis mollitia ipsum quis amet
              facere voluptas alias neque?
            </p>
            <div className="tp-images"></div>

            <a href="">view more</a>
          </div>

          <div className="awards-sec pt-5 mb-5">
            <h2 className="text-center">Awards</h2>
            <div className="row">
              <div className="col-md-10 col-sm-6">
                <div className="award-right-con">
                  <div className="award-p-img">
                    <img src="" alt="" />
                  </div>
                  <div className="award-info">
                    <h2 className="award-date">2020</h2>
                    <p className="award-title">WAC Award</p>
                    <p className="award-descrp">
                      <p>Best Cyber Security Product Company</p>
                    </p>
                    <a href="">view more</a>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="win-logo">
                  <img src={winnerlogo} alt="" />
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

export default AboutTechAndSol;
