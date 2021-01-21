import React, { Component } from "react";
import NavBar from "../components/navbar.jsx";
import Breadcrumb from "../components/breadCrumb.jsx";
import Footer from "../components/footer.jsx";
import "../cssFolder/ourTeam.css";
import prof1 from "../images/prof1.jpg";
import prof2 from "../images/prof2.jpg";
import prof3 from "../images/prof3.jpg";
class ourTeam extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Breadcrumb pageName="Our Team" />
        <header className="head-title text-center container my-5">
          <h2>The Leadership Team</h2>
          <p className="lead">
            We strongly believe in building a transgenerational organization
            that stands the test of any leadership changes.
          </p>
        </header>
        <section className="team-profiles container text-center my-5">
          <div class="row row-cols-1 row-cols-md-3 ">
            <div class="col mb-4">
              <div class="">
                <img src={prof1} className="  img-radius" alt="..." />
                <div class="card-body">
                  <h6 className="card-title">
                    Joy Anozie
                    <br />
                    Chief Executive Officer, Caramel Group
                  </h6>
                  <p class="card-text">
                    <small>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Vero sint reprehenderit quibusdam nemo expedita incidunt
                      nulla, laborum, iure, veniam odit dolorum velit quam eius
                      maiores illum iusto reiciendis assumenda ipsum?
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="">
                <img src={prof1} className="img-radius" alt="..." />
                <div class="card-body">
                  <h6 className="card-title">sara Mohammed</h6>
                  <p class="card-text">
                    <small>Head, Technology group</small>
                  </p>
                </div>
              </div>
            </div>

            <div class="col mb-4">
              <div class="">
                <img src={prof1} class="img-radius" alt="..." />
                <div class="card-body">
                  <h6 className="card-title">Dara Dike</h6>
                  <p class="card-text">
                    <small>HR/ Admin Manager</small>
                  </p>
                </div>
              </div>
            </div>
            <a href="">learn More</a>
          </div>
        </section>

        <section>
          <div className="jumbotron-fluid join-careers d-flex align-items-center mb-0">
            <div class="container">
              <div class="card">
                <div class="card-body p-5 text-center">
                  <h2>Join The Winning Team</h2>
                  <p className="">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    illum at placeat a corrupti obcaecati dicta vel dolor eos
                    nostrum !
                  </p>
                  <button
                    type="button"
                    class="btn btn-outline-primary text-blue border-blue m-1"
                  >
                    careers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </React.Fragment>
    );
  }
}

export default ourTeam;
