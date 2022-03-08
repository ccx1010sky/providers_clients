// import React from 'react'

// const Client = () => {
//   return (
//     <div>Client</div>
//   )
// }

// export default Client

import * as React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";




import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { MenuComponent } from "@syncfusion/ej2-react-navigations";
import { SampleBase } from "../sample-base";
import Appointments from "../components/Appointments";
import "./sidebar-menu.css";
import Dashboard from "../components/Dashboard";
import Diary from "../components/Diary";
import Accounts from "../components/Accounts";







export default class Client extends SampleBase {
  
  state = {
    page:"Dashboard"
  }
  
  showTargetPage = () =>{
    
    if((this.state.page) ==="Diary"){return <Diary/>}
    if((this.state.page)==="Appointments"){return <Appointments appointmentData = {this.props.appointmentData}/>} 
    if ((this.state.page)==="Dashboard"){return  <Dashboard/>}
    if ((this.state.page)==="Accounts"){return  <Accounts/>}
    
    
  }
  
  constructor() {
    
    super(...arguments);
    this.mediaQuery = "(min-width: 600px)";
    this.menuItems = [
      
      { 
       
        text: "Diary",
        iconCss: "icon-globe icon",
        items: [
          // { text: "All Data" },
          // { text: "Category2" },
          // { text: "Category3" },
        ],
      },
      {
       
        text: "Appointments",
        iconCss: "icon-bell-alt icon",
        items: [
          // { text: "Message" }, { text: "Facebook" }, { text: "Twitter" }
        ],
      },
      {
        text: "Accounts",
        iconCss: "icon-comment-inv-alt2 icon",
        items: [
          // { text: "Category1" },
          // { text: "Category2" },
          // { text: "Category3" },
        ],
      },
    ];

    this.AccountMenuItem = [
      {
        text: "Account",
        items: [{ text: "Profile" }, { text: "Sign out" }],
      },
    ];
    this.enableDock = false;
    this.dockSize = "52px";
    this.width = "220px";
    this.target = ".main-content";
  }
  render() {
    return (
      <div className="control-section sidebar-menu">
        <div className="col-lg-12 col-sm-12 col-md-12 center">
          Click/Touch the button to view the sample
        </div>
        <div className="col-lg-12 col-sm-12 col-md-12 center">
          <a
            className="e-btn"
            id="newTab"
            target="_blank"
            onClick={this.newTabClick.bind(this)}
          >
            Open in new Tab
          </a>
        </div>
        <div id="wrapper">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="header-section dock-menu" id="header">
              <ul className="header-list">
                <li
                  id="hamburger"
                  className="icon-menu icon list"
                  onClick={this.openClick.bind(this)}
                ></li>

                {/* <input
                  type="text"
                  placeholder="Search..."
                  className="search-icon list"
                ></input> */}
                <li className="right-header list">
                  <div className="horizontal-menu">
                    <MenuComponent
                      items={this.AccountMenuItem}
                      cssClass="dock-menu"
                    ></MenuComponent>
                  </div>
                </li>
                {/* <li className="right-header list support">Support</li>
                <li className="right-header list tour">Tour</li> */}
              </ul>
            </div>

            <SidebarComponent

              id="sidebar-menu"
              ref={(Sidebar) => (this.sidebarobj = Sidebar)}
              enableDock={this.enableDock}
              mediaQuery={this.mediaQuery}
              dockSize={this.dockSize}
              width={this.width}
              target={this.target}
            >
              <div className="main-menu">
                <p className="main-menu-header">MAIN</p>
                <MenuComponent
                  onClick={this.menuClick.bind(this)}
                  items={this.menuItems}
                  orientation="Vertical"
                  cssClass="dock-menu"
               ></MenuComponent>
              </div>

              <div className="action">
                <p className="main-menu-header">ACTION</p>
                <button className="e-btn action-btn" id="action-button">
                  + Button
                </button>
              </div>
            </SidebarComponent>

            <div className="main-content" id="maintext">
              <div className="sidebar-menu-content">

                
                {this.showTargetPage()}

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // open newTab
  newTabClick() {
    let URL = window.location.href.replace(window.location.search, "");
    document
      .getElementById("newTab")
      .setAttribute(
        "href",
        URL.split("#")[0] + "sidebar/sidebar-menu/index.html"
      );
  }
  // open the sidebar
  openClick() {
  
    this.sidebarobj.toggle();
  }
  
  menuClick(event){
    
    this.setState({
      
      page:event.target.ariaLabel 
     })
  }
}

// ReactDOM.render(<Client />, document.getElementById('root'));





