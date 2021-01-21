import React, { Component } from "react";
import "../cssFolder/homepage.css";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import fpgTech from "../images/fpgTech.PNG";
import fpgEnergy from "../images/fpgEnergy.PNG";
import fpgProj from "../images/fpgProj.PNG";
import customerservice from "../images/customerService.svg";
class Homepage extends Component {
  state = {

  };
  render() {
    return (
      <React.Fragment>
        <header>
          <NavBar />
          {/* mask */}
          <div id="intro" class="view d-flex align-items-center  ">
            <div className="full-bg-img container-md">
              <div className="text-white ">
                <h1 className=" page-descrp display-3 font-weight-bold">
                  Caramel Group
                </h1>
                <p>Building a trans-generational organisation</p>
                <button
                  type="button"
                  class="btn btn-outline-primary active text-white"
                >
                  Learn More
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary text-white border-white m-1"
                >
                  watch video
                </button>
              </div>
            </div>
          </div>
        </header>

        <main class="mt-5">
          <div className="container">
            <section id="whoandwhat d-flex align-items-center">
              <div className="row ">
                <div className="col-md-6  mb-4">
                  <h2 className="my-2">Who We Are</h2>
                  <p className="lead">
                    We are passionate about outstanding customer service and
                    exceptional employee satisfaction.
                  </p>
                  <p>
                    <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci libero velit sed reprehenderit voluptas, 
                     consequatur quibusdam, commodi autem dolores eum asperiores explicabo voluptatibus. Ex adipisci cum hic voluptatum rerum.
                    </p>
                  </p>
                  <button type="button" class="btn btn-outline-primary  m-1">
                    watch video
                  </button>
                </div>
                <div className="col-md-6  mb-5">
                  <h2 className="my-2">What We Believe</h2>
                  <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
                  </p>
                  <p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
                      <br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
                    </p>
                  </p>
                  <button type="button" class="btn btn-outline-primary m-1">
                    watch video
                  </button>
                </div>
              </div>
            </section>
            <hr class="my-5" />
          </div>

          <section>
            <div class="card-group">
              {/* image overlay ptactice */}

              <div className="card  image-overlay-text1">
                <img src={fpgProj} className=" imgimg" alt="image1" />
                <div className="overlay"></div>
                <div className="overla">
                  <h5 className="overla-head-tlt">Caramel Technologies</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore eos nesciunt architecto doloremque itaque
                    reiciendis sit nobis voluptas sequi minima debitis
                    molestias, soluta ex exercitationem tenetur officiis
                    consequuntur. Illum, at!
                  </p>
                </div>
              </div>

              {/* image overlay ptactice */}

              <div className="card  image-overlay-text1">
                <img src={fpgProj} className=" imgimg" alt="image1" />
                <div className="overlay"></div>
                <div className="overla">
                  <h5 className="overla-head-tlt">Caramel Technologies</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore eos nesciunt architecto doloremque itaque
                    reiciendis sit nobis voluptas sequi minima debitis
                    molestias, soluta ex exercitationem tenetur officiis
                    consequuntur. Illum, at!
                  </p>
                </div>
              </div>

              <div className="card  image-overlay-text1">
                <img src={fpgProj} className=" imgimg" alt="image1" />
                <div className="overlay"></div>
                <div className="overla">
                  <h5 className="overla-head-tlt">Caramel Technologies</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore eos nesciunt architecto doloremque itaque
                    reiciendis sit nobis voluptas sequi minima debitis
                    molestias, soluta ex exercitationem tenetur officiis
                    consequuntur. Illum, at!
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container text-center my-5">
              <h2>Corporate Social Responsibility</h2>
              <p className="text-secondary">
                <b>
                  Caramel Group  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
                </b>
              </p>
              <div class="row">
                <div class="col-md-4 ">
                  <img src={fpgEnergy} class="card-img-top w-75  img3" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">CSR with our customers</h5>
                    <p class="card-text text-secondary">
                      <p className="text-wrap">
                        We maintain integrity in all areas of our business.  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
                      </p>
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <img src={fpgEnergy} class="card-img-top w-75 img3" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">CSR with our partners</h5>
                    <p class="card-text text-secondary">
                      <p>
                        We believe in giving back. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
                      </p>
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <img src={fpgEnergy} class="card-img-top w-75 img3" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Other CSR</h5>
                    <p class="card-text text-secondary">
                      <p>
                        We are committed to being profitable to all our
                        stakeholders. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum .
                      </p>
                    </p>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary">Learn more</button>
            </div>
          </section>
          <section>
            <div className="container-md text-center my-5">
              <h2>Latest News</h2>
              <div class="row justify-content-around">
                <div class="col-md-5 ">
                  <img
                    src={fpgEnergy}
                    class="card-img-top w-75  img3"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
                    </h5>
                    <p class="card-text text-secondary">
                      <p>
                        caramel Technologies has been named the Tech Consulting
                        Company of the  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati 
                      </p>
                    </p>
                  </div>
                </div>
                <div class="col-md-5">
                  <img
                    src={fpgEnergy}
                    class="card-img-top w-75 img3"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
                    </h5>
                    <p class="card-text text-secondary ">
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container my-5">
              <div className="row d-flex align-items-center">
                <div className="col-md-4">
                  <img src={customerservice} className="cus-img" alt="" />
                </div>

                <div className="col-md-5 ">
                  <h4>Got Questions?</h4>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
                  </p>
                </div>

                <div className="col-md-3">
                  <button className="btn btn-primary"> Contact Us</button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        
      </React.Fragment>
    );
  }
}

export default Homepage;
