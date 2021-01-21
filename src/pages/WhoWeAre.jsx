import React, { Component } from 'react';
import NavBar from '../components/navbar.jsx'
import  Breadcrumb from '../components/breadCrumb.jsx';
import image1 from '../images/image1.jpg';
import desktopicon from '../images/desktopicon.png';
import Footer from '../components/footer.jsx';
import {Link} from 'react-router-dom';
import '../cssFolder/WhoWeAre.css'
import mask from '../images/mask.svg'
import energy from '../images/energy.svg'
import OurGrandVision from './OurGrandVision.jsx';
class WhoWeAre extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
              <div>
              <NavBar/>
              <Breadcrumb pageTitle='About us' pageSubtitle='who we are'/>
              </div>
               
               
                <div className="who-we-are-intro d-flex justfify-center align-items-center">
                <div class="container ">
                    <h2 className="text-center">Who we are </h2>
  <div class="row py-5 justify-content-center ">
    <div class=" col-sm col-md-6">
    <img src={image1} class="img-fluid" alt="Responsive image"/>
    </div>
    <div class="col-sm col-md-6 text-left">
   <p className="">
   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium at magnam quasi sunt totam labore. Inventore, 
   excepturi voluptatem quod aliquid ipsum sed facilis voluptatibus commodi cum odio harum possimus.
   </p>
    </div>
  </div>

</div>
</div>

<div className="jumbotron-fluid text-white our-journey d-flex justfify-center align-items-center">
<div class="container our-jour-text-sec">
                    <h2 className="pb-3">Our Journey</h2>
  <div class="row ">
  <div class=" col-md-6">
   <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi fuga temporibus tempora repellat hic ab sunt, 
   at dolorum velit aut delectus fugiat quia deleniti numquam aspernatur architecto aliquid iste.
   </p>
    </div>
    <div class=" col-md-6">
   <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio quos non voluptatibus, quidem nihil possimus et? Voluptas, 
   doloremque eaque. Cum recusandae veniam voluptate praesentium dignissimos commodi corrupti esse aperiam?
   </p>
    </div>
  </div>
</div>
</div>

<section >
  
<div class="container py-5 ">
    <h2 className="text-center pb-3">Early Days</h2>
  <div class="row  justify-content-around">
  <div class="  col-sm col-md-5  "> <img src={image1} class="img-fluid" alt="Responsive image"/></div>
  <div class="  col-sm  col-md-7 ">
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nemo tempora nihil quas qui voluptatibus quidem quisquam, 
    illo inventore atque, asperiores ipsum fugit. Iste labore pariatur quo doloribus, vitae quidem.
    </p>
    </div>
   
  </div>
  <div className="row justify-content-center my-4">
  
    <div class="  col-sm  col-md-7">
    <p>
   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci 
   cum ex enim consequatur architecto! Accusamus odit quaerat iste hic nesciunt, esse, quo quod aliquid commodi, expedita ullam molestias excepturi nisi?
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quasi facilis laudantium? Consequuntur non voluptatibus ducimus? Eaque eos esse fugit minima. 
   Mollitia soluta dolorem molestiae repellat ea vitae accusantium maxime.
    </p>
    </div>
    <div class="  col-sm col-md-5"> <img src={image1} class="img-fluid" alt="Responsive image"/></div>
  </div>
</div>
</section>
<div className="container p-5">
 <div className="text-center">
 <h3 className=" my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ab ea labore sunt minima dolorem
  </h3>
    <Link to ="/WhatWeBelieve"> <b>What We Believe</b><b className="fa fa-arrow-right p-1 m-1 text-decoration-none"></b> </Link>
 </div>
</div>

<div class="jumbotron jumbotron-fluid our-bus-sec">
  <div class="container text-center">
    <h2 className="pb-5" >Our Business Sectors</h2>
    
<div class="row row-cols-1 row-cols-md-3 ">
  <div class="col mb-4">
    <div class="">
    {/* <img src={desktopicon} class="w-25 card-img-top" alt="..."/> */}
    <a href="" className="fa fa-laptop  fa-5x text-secondary text-decoration-none"></a>
      <div class="card-body">
        <p className="lead">Technology</p>
        <p class="card-text">
          <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
          </p>
        </p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="">
    <img src={energy} class="card-img-top w-25"  alt="..."/>
      <div class="card-body">
        <h5 className="lead">Energy</h5>
        <p class="card-text">
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
          </p>
        </p>
      </div>
    </div>
  </div>
  
  <div class="col mb-4">
    <div class="">
    <img src={mask} class="card-img-top w-25" alt="..."/>
      <div class="card-body">
        <h5 className="lead">Civil Works</h5>
        <p class="card-text">
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum 
          </p>
        </p>
      </div>
    </div>
  </div>
  </div>
  </div>
</div>

<div className="container my-5 ">
  <div className="row align-items-center ">
    <div className=" col-sm-8 pl-5" >
      <h2>Got Questions?</h2>
      <p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        illum at placeat a corrupti obcaecati dicta vel dolor eos nostrum </p></p>
    </div>
    <div className=" col-sm-4 pl-5">  <button
                type="button"
                class="btn btn-outline-primary text-blue border-blue mr-auto
  "
              >
               Get in touch 
              </button></div>
  </div>
</div>



<Footer/>
            </React.Fragment>

          );
    }
}
 
export default WhoWeAre;