import React, { Component } from "react";
import NavBar from "../components/navbar.jsx";
import Breadcrumb from "../components/breadCrumb.jsx";
import Footer from "../components/footer.jsx";
import target from "../images/target.jpg";
import "../cssFolder/WhatWeBelieve.css";
import arrowT from "../images/arrow-target.png";
import integrity from "../images/integrityL.png";
import leadership from "../images/leadershipL.png";
import simplicity from "../images/simplicityL.png";
import synergy from "../images/synergyL.png";
import flexibility from "../images/flexibilityL.png";
import gobeyound from "../images/gobeyoundL.png";
import { Link } from "react-scroll";
class WhatWeBelieve extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Breadcrumb pageTitle="About us" pageSubtitle="what we believe" />

        <section>
          <div className="container-md">
            <header>
              <h2>What We Believe</h2>
            </header>
            <div className="row d-flex  justify-content-center py-5 ">
              <div className="col-md-6">
                <p>
                  {" "}
                  <b>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    illum at placeat a corrupti obcaecati dicta vel dolor eos
                    nostrum
                  </b>
                  <p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Tenetur sint eveniet ipsam fugit dolorum totam accusamus
                      voluptates dolorem perspiciatis nesciunt aperiam illum
                      optio culpa voluptas sequi, nisi quas tempore aliquam.
                      relationship with many of the key technology providers
                      ensures our customers have choices. We are diverse and
                      innovative in our approach to ensure technical excellence.
                    </p>
                  </p>
                </p>
              </div>

              <div className="col-md-6 d-flex flex-column align-items-center">
                <div class="row">
                  <div class="grey grey1 ">Column</div>
                  <div class="grey grey2">Column</div>
                </div>
                <div class="row">
                  <div class=" grey grey3">Column</div>
                  <div class="grey grey4">Column</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className=" jumbotron-fluid ourVs">
          <div className="container">
            <div className="row our-vision-mission" id="our-vision-mission">
              <div className="our-vision col-md-4">
                <h3> Our Vision</h3>
                <p>
                  <p>
                    Our vision is to help our customers drive extreme business
                    agility with confidence anywhere.
                  </p>
                </p>
              </div>
              <div
                className="img-vision text-center col-md-4"
                id="ourgrandvision"
              >
                <img src={arrowT} alt="" />
              </div>
              <div className="our-mission col-md-4">
                <p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    illum at placeat a corrupti obcaecati dicta vel dolor eos
                    nostrum
                  </p>
                </p>
                <h3>Our Mission</h3>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center our-value">
            <div className="card  our-value-card ">
              <div className="container p-5 ">
                <h3 className=" text-center pb-5">Our Value Proposition</h3>
                <div className="row">
                  <div className="col-md-4">
                    <p className="text-uppercase">
                      HIGH LEVEL OF CUSTOMER SATISFACTION
                    </p>
                    <p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dignissimos, enim odio, nesciunt quidem adipisci
                        numquam nulla eius illo esse minima ducimus quas saepe
                        labore porro soluta, beatae expedita nihil. Voluptas.
                        engagement model. Our team have proven subject matter
                        expertise, product knowledge and strong execution
                        capabilities across all areas of Information Technology.
                      </p>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="text-uppercase">GREAT EMPLOYEES</p>
                    <p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga molestiae sint consectetur, quasi fugit obcaecati
                        id reiciendis dignissimos voluptatibus est voluptatem?
                        Iure inventore sit quod voluptatum. Corporis provident
                        deleniti repudiandae!
                      </p>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="text-uppercase">
                      OUTSTANDING OPERATIONAL EFFICIENCIES
                    </p>
                    <p>
                      <p>
                        We are always on the lookout for new technology. We
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed, magnam labore rerum incidunt nisi veritatis
                        repellat aperiam praesentium qui doloribus officia. Unde
                        repudiandae ipsum tenetur quisquam odio eligendi
                        adipisci minima! employees, and other stake holders.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className="text-center d-flex justify-content-center align-items-center c-values"
          id="core-value"
        >
          <div className="container p-5">
            <header>
              <h2 className="pt-5">Our Core Values</h2>
              <p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore excepturi error corporis quis officia velit dolor
                  facilis voluptatibus similique unde voluptatem aperiam, ipsum
                  totam est, facere architecto maiores! Numquam, maxime.
                </p>
              </p>
            </header>
            <div class="row mb-5 ">
              <div class="col-md-4">
                <img src={integrity} alt="" />
                <h6>Integrity</h6>
                <p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi consequatur animi harum excepturi accusamus
                    aspernatur non dolor deleniti, obcaecati voluptatibus
                    laudantium nemo neque aut? Dolore hic laudantium iusto
                    delectus itaque!
                  </p>
                </p>
              </div>
              <div class="col-md-4">
                <img src={simplicity} alt="" />
                <h6>Simplicity </h6>
                <p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    ad illum id earum, recusandae optio rerum eveniet! Omnis
                    pariatur, minus animi eligendi vitae repellat ullam tempore,
                    sunt voluptatibus magnam natus?
                  </p>
                </p>
              </div>
              <div class="col-md-4 ">
                <img src={leadership} alt="" />
                <h6>Leadership</h6>
                <p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    illum at placeat a corrupti obcaecati dicta vel dolor eos
                    nostrum
                  </p>
                </p>
              </div>
            </div>

            <div class="row mt-5 ">
              <div class="col-md-4">
                <img src={synergy} alt="" />
                <h6>Synergy</h6>
                <p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    illum at placeat a corrupti obcaecati dicta vel dolor eos
                    nostrum
                  </p>
                </p>
              </div>
              <div class="col-md-4">
                <img src={flexibility} alt="" />
                <h6>Flexibility</h6>
                <p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    illum at placeat a corrupti obcaecati dicta vel dolor eos
                    nostrum Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. illum at placeat a corrupti obcaecati dicta vel dolor
                    eos nostrum
                  </p>
                </p>
              </div>
              <div class="col-md-4">
                <img src={gobeyound} alt="" />
                <h6>Go-Beyond</h6>
                <p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    illum at placeat a corrupti obcaecati dicta vel dolor eos
                    nostrum
                  </p>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default WhatWeBelieve;
