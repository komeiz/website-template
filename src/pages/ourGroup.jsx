import React, { Component } from "react";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

class ourGroup extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section className="jumbotron bg-white jumbotron-fluid text-center">
          <div className="container">
            <h2>Our Companies</h2>
            <div className="row">
              <div className="col-md-4">
                <div>
                  <h5 className="font-weight-normal">Technology</h5>
                  <p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      illum at placeat a corrupti obcaecati dicta vel dolor eos
                      nostrum .
                    </p>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <h5 className="font-weight-normal">Energy</h5>
                  <p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      illum at placeat a corrupti obcaecati dicta vel dolor eos
                      nostrum .
                    </p>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <h5 className="font-weight-normal">Civil Works</h5>
                  <p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      illum at placeat a corrupti obcaecati dicta vel dolor eos
                      nostrum .
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <a href=""> Learn More</a>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ourGroup;
