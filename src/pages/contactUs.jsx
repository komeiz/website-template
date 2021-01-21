import React, { Component } from "react";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import chatbox from "../images/chatbot.png";
import { Link } from "react-router-dom";
import cusimg from "../images/cusimg.png";
import "../cssFolder/contactUs.css";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>
          <div className="cus-sup-container d-flex align-items-center">
            <div className="container">
              <div className="row support-cus-row">
                <div className="col-md-6 sup-col-1 text-center">
                  <div className="image">
                    <img src={cusimg} alt="" />
                  </div>
                  <p className="bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    illum at placeat a corrupti obcaecati dicta vel dolor eos
                    nostrum
                    <br /> the Live Chat system on our website or one of <br />{" "}
                    the below instant messaging programs.
                  </p>
                  <Link>Get sales support</Link>
                  <Link>Get technical support</Link>
                </div>
                <div className="col-md-6 sup-col-2 ">
                  <h4>How important is our customers’ satisfaction to us?</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rerum iusto enim quaerat, sed consectetur qui ipsam dolores
                    nam, eos distinctio sint doloribus nostrum aliquid libero
                    harum aut porro blanditiis dignissimos?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, nostrum ad. Laborum numquam molestiae voluptatum, sint
                    dignissimos assumenda itaque quos voluptatem aliquam quia,
                    quidem excepturi corrupti dolorum ullam velit rem!
                  </p>

                  <div className="d-flex email-tel-row">
                    <div className="emails-sec-s">
                      <div className="d-flex">
                        <i className="pt-1 fa fa-envelope"></i>
                        <label className="pl-2" htmlFor="">
                          email:
                        </label>
                        <ul className="ct-list email-con-list">
                          <li>info@caragroup.com</li>
                          <li>support@carapgroup.com</li>
                          <li>sales@caragroup.com</li>
                        </ul>
                      </div>
                    </div>
                    <div className="tels-sec-p">
                      <div className="d-flex ">
                        <i className="fa fa-phone pt-1 pr-2"></i>
                        <label htmlFor="">Tel:</label>
                        <ul class="ct-list tel-con-list">
                          <li>+234 (0) 1687 995-6</li>
                          <li>+234 Ex: 4001;</li>
                          <li>+234 817 2894 171</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-sec d-flex align-items-center">
            <div className="container text-white con-add-con">
              <form class="form-sec" action="" method="post">
                <h4>You can also send us a message using the form below</h4>
                <p>Please be patient while waiting for response.</p>
                <div className="row d-flex align-items-start">
                  <div className="col-md-6">
                    <div className=" personal-info-input ">
                      <input
                        type="text"
                        name="fullname"
                        className=" mb-4 form-control bg-light "
                        placeholder="Name"
                      />
                      <input
                        type="email"
                        name="email"
                        className="  mb-4 form-control bg-light"
                        placeholder="Email"
                      />
                      <select
                        className=" form-control bg-light text-secondary"
                        name="areas of inquiry"
                        id=""
                      >
                        <option selected>Area(s) of inquiry</option>
                        <option value="business">business</option>
                        <option value="solutons">solutions</option>
                        <option value="careers">careers</option>
                        <option value="intern">internship</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="msg-send-btn">
                      <textarea
                        className="mb-3  form-control bg-light"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                      <button className=" btn btn-primary ]">Send</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="red-address d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h3>Corporate Office</h3>
                  <p>
                    <b>caramle Technologies & Solutions LTD</b>
                  </p>
                  <p>
                    32 grand,street <br />
                    Lekki Phase 1.
                  </p>
                </div>
                <div className="col-md-6">
                  <h3>Registered Address</h3>
                  <p>
                    <b>caramel Technologies & Solutions LTD</b>
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-sec d-flex align-items-center">
            <p>MAP</p>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ContactUs;
