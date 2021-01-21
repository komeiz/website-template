import React, { Component } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Homepage from './pages/homePage.jsx';
import AboutTechAndSol from './pages/aboutTechAndSol.jsx';
import Careers from './pages/careers.jsx';
import WhoWeAre from './pages/WhoWeAre.jsx';
import ourTeam from './pages/ourTeam.jsx';
import whatwebelieve from './pages/WhatWeBelieve.jsx';
import ourGroup from './pages/ourGroup.jsx';
import CaramelTechAndSol from './pages/CaramelTechAndSol.jsx';
import {Link} from 'react-scroll';
import InnovationHub from './pages/innovationHub';
import OurGrandVision from './pages/OurGrandVision.jsx';
import ContactUs from './pages/contactUs.jsx'
import Support from './pages/support.jsx'

class App extends Component {
  state = {  }
  render() { 
    return (  
<Router>
<div>
<Route exact path ="/" component ={Homepage}/>
<Route path="/aboutTechAndSol" component ={AboutTechAndSol}/>
<Route path="/careers" component ={Careers}/>
<Route path ="/WhoWeAre" component ={WhoWeAre}/>
<Route path ="/ourTeam" component ={ourTeam}/>
<Route path ="/whatwebelieve" component ={whatwebelieve}/>
<Route path ="/ourGroup" component ={ourGroup}/>
<Route path="/caramelTechAndSol" component={CaramelTechAndSol}/>
<Route path ="/innovationhub" component={InnovationHub}/>
<Route path="/ourgrandvision" component={ OurGrandVision}/>
<Route path ="/contactus" component ={ContactUs}/>
<Route path="/support" component ={Support}/>

</div>


</Router>

    );
  }
}
 
export default App;