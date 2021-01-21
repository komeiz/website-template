import React, { Component } from "react";
import "../cssFolder/footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer className="footer-gen">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-items">
                  <h3 className="footer-link-head">Caramel Group</h3>
                  <ul className="footer-links">
                    <li className="">
                      <Link className="f-links">Sitemap</Link>
                    </li>
                    <li>
                      <Link className="f-links">Our Group</Link>
                    </li>
                    <li>
                      <Link className="f-links">
                        Corporate Social Responsibility
                      </Link>
                    </li>
                    <li>
                      <Link className="f-links">Our Partners</Link>
                    </li>
                    <li>
                      <Link className="f-links">Our Customers</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-items">
                  <h3 className="footer-link-head">Resources</h3>
                  <ul className="footer-links">
                    <li className="">
                      <Link className="f-links">White Papers</Link>
                    </li>
                    <li>
                      <Link className="f-links">Data Sheets</Link>
                    </li>
                    <li>
                      <Link className="f-links">Press Releases</Link>
                    </li>
                    <li>
                      <Link className="f-links">Blog</Link>
                    </li>
                    <li>
                      <Link className="f-links">News & Events</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-items">
                  <h3 className="footer-link-head">Quick Links</h3>
                  <ul className="footer-links">
                    <li className="">
                      <Link className="f-links">Careers</Link>
                    </li>
                    <li>
                      <Link className="f-links">Legal Information</Link>
                    </li>
                    <li>
                      <Link className="f-links">Awards & Recognitions</Link>
                    </li>
                    <li>
                      <Link className="f-links">Support</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-items">
                  <h3 className="footer-link-head">Connect With Us</h3>
                  <ul className="footer-links">
                    <li>
                      <span className="social-media-icons">
                        <Link
                          to="#"
                          className="fa fa-facebook fb p-2 m-1 text-decoration-none f-links"
                        ></Link>
                        <Link
                          to="#"
                          className="fa fa-twitter twt p-2 m-1 text-decoration-none f-links"
                        ></Link>
                        <Link
                          to="#"
                          className="fa fa-youtube yt p-2 m-1 text-decoration-none f-links"
                        ></Link>
                        <Link
                          to="#"
                          className="fa fa-linkedin li  m-1 text-decoration-none f-links"
                        ></Link>
                      </span>
                    </li>
                    <li>
                      <Link className="f-links" to="#">
                        <i className="fa fa-phone ">
                          <span className="pl-1">+96670456780</span>
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link className="f-links" to="#">
                        <i className="fa fa-envelope">
                          <span className="pl-1">pun@gmail.com</span>
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <nav class="navbar navbar-expand-lg navbar-dark foot-nav">
         <div className="container">
         <ul class="navbar-nav mr-auto ">
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <span class="navbar-text text-white">
            ©{new Date().getFullYear()} Caramel Group.  All rights Reserved.
          </span>
         </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Footer;
