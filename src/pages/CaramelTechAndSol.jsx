import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../components/navbar2.jsx";
import "../cssFolder/CaramelTechAndSol.css";
import Footer from "../components/footer.jsx";

class CaramelTechAndSol extends Component {
  state = {
    tabIndex: 0,
  };

  clickedTab(index) {
    this.setState({tabIndex: index})
  }

  componentDidMount() {
    console.log("Page has mounted")
  }

  render() {
    const {tabIndex} = this.state
    return (
      <React.Fragment>
       
       <Navbar2 />
     
        <div className="jumbotron-fluid d-flex align-items-center justify-content-center homepage2-header">
        
          

              <div className="container">
              <div className="">
                <h2>Extreme business agility with confidence</h2>
                <button className="btn btn-primary">Learn more</button>
              </div>
      
              </div>
        </div>

        <div className="our-ser-section d-flex justify-content-cnter align-items-center">
        <div className="container text-center">
          <h3 className="text-primary">Our Services</h3>
          <p>
            <p>
              Our solutions range from a host of Cloud, Infrastructure and Mobile
              (CIM) Solutions and Services as well as Enterprise Security
              Solutions and Services (ESSS)
            </p>
          </p>

          <div className="row">
            <div className="col-md-4">
              <p className="fa fa-globe"></p>
              <p>CLOUD, INFRASTRUCTURE AND MOBILITY SOLUTIONS AND SERVICES</p>
              <p>
                <p>
                  The dream of this solution is to provide a comprehensive end
                  to end security of your IT environment
                </p>
              </p>
            </div>
            <div className="col-md-4">
              <p className="fa fa-cloud"></p>
              <p>Enterprise Security Solutions & Services</p>
              <p>
                <p>
                  End-to-end private, Public and Hybrid Cloud build out and
                  management solutions
                </p>
              </p>
            </div>
            <div className="col-md-4">
              <p className="fa fa-phone"></p>
              <p>BUSINESS INSIGHT & PRODUCTIVITY</p>
              <p>
                <p>
                  Achieve unprecedented high levels of productivity with ability
                  to work from anywhere and from any device.
                </p>
              </p>
            </div>
          </div>
        </div>
        </div>

        <div className="our-solutions d-flex justify-content-center align-items-center">
          <div className="container">
           <div className="sol-headline text-center">
           <h2 className="text-primary">Our Solutions</h2>
            <p className="lead">
              Our solutions range from a host of Cloud, Infrastructure & Mobile
              (CIM) Solutions & Services as well as Enterprise Security
              Solutions & Services (ESSS)
            </p>
           </div>
         
{/* className={`${this.state.tabIndex === 0 ? "bg-light m-1": "bg-dark m-1"}`}  */}
          <div className="row">
            <div className="col-md-6 text-center">
              <div onClick={() => this.clickedTab(0)} className={`${tabIndex === 0 ? "bg-active": "bg-inactive"}`}>
                item 1
              </div>
              <div onClick={() => this.clickedTab(1)} className={`${tabIndex === 1 ? "bg-active": "bg-inactive"}`}>
                item 2
              </div>
              <div onClick={() => this.clickedTab(2)} className={`${tabIndex === 2 ? "bg-active": "bg-inactive"}`}>
                item 3
              </div>
              <div onClick={() => this.clickedTab(3)} className={`${tabIndex === 3 ? "bg-active": "bg-inactive"}`}>
                item 4
              </div>
            </div>

            <div className="col-md-6 sol-items text-left">
              {tabIndex === 0 && (
                <div id="item1 item-desc">
                  <h4>item 1</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque tempora provident sapiente perferendis architecto
                    commodi facilis nisi laborum dolore voluptas ipsam est,
                    exercitationem fugiat doloribus nobis iure. Possimus,
                    ducimus eos!
                  </p>{" "}
                </div>
              )}
              {tabIndex === 1 && (
                <div id="item2">
                  <h4>item 2</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque tempora provident sapiente perferendis architecto
                    commodi facilis nisi laborum dolore voluptas ipsam est,
                    exercitationem fugiat doloribus nobis iure. Possimus,
                    ducimus eos!
                  </p>{" "}
                </div>
              )}
              {tabIndex === 2 && (
                <div id="item3">
                  <h4>item 3</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque tempora provident sapiente perferendis architecto
                    commodi facilis nisi laborum dolore voluptas ipsam est,
                    exercitationem fugiat doloribus nobis iure. Possimus,
                    ducimus eos!
                  </p>{" "}
                </div>
              )}
              {tabIndex === 3 && (
                <div id="item4">
                  <h4>item 4</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque tempora provident sapiente perferendis architecto
                    commodi facilis nisi laborum dolore voluptas ipsam est,
                    exercitationem fugiat doloribus nobis iure. Possimus,
                    ducimus eos!
                  </p>{" "}
                </div>
              )}
            </div>
          </div>
        </div>
</div>
        <div className="jumbotron-fluid service-support d-flex flex-md-column align-items-center justify-content-center">
          <div className="container ">
            <div className=" text-center ">
              <h2 className="text-primary">Need Support For Any Of Our Services?</h2>
              <p>
                We are always looking for new partnerships and business
                opportunities. All innovative ideas and solutions are welcome to
                be discussed.
              </p>
              <button class="btn btn-outline-primary">Learn more</button>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default CaramelTechAndSol;
