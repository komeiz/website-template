import React, { Component } from 'react';
import '../cssFolder/breadCrumb.css'
class Breadcrumb extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
               
  <div className="breadcrumb bread-crumb-cum mb-0 p-0">
  <ol class="breadcrumb container mb-0">
    <li class="breadcrumb-item">{this.props.pageTitle} </li>
    <li class="breadcrumb-item active" aria-current="page">{this.props.pageSubtitle}</li>
  </ol>
  </div>

            </React.Fragment>
          );
    }
}
 
export default Breadcrumb;