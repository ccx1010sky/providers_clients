// import React from 'react'

// const Client = () => {
//   return (
//     <div>Client</div>
//   )
// }

// export default Client

import * as React from "react";
import ReactDOM from "react-dom";


import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { MenuComponent } from "@syncfusion/ej2-react-navigations";
import { SampleBase } from "../sample-base";
import "./sidebar-menu.css";


export default class Client extends SampleBase {
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
        text: "Appointment",
        iconCss: "icon-bell-alt icon",
        items: [
          // { text: "Message" }, { text: "Facebook" }, { text: "Twitter" }
        ],
      },
      {
        text: "Client",
        iconCss: "icon-comment-inv-alt2 icon",
        items: [
          // { text: "Category1" },
          // { text: "Category2" },
          // { text: "Category3" },
        ],
      },
      {
        text: "Location",
        iconCss: "icon-bookmark icon",
        items: [
          // { text: "All Comments" },
          // { text: "Add Comments" },
          // { text: "Delete Comments" },
        ],
      },
      {
        text: "Team",
        iconCss: "icon-picture icon",
        items: [
          // { text: "Add Name" },
          // { text: "Add Mobile Number" },
          // { text: "Add Imaage" },
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
                <div> Responsive Sidebar with Menu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //open newTab
  newTabClick() {
    let URL = window.location.href.replace(window.location.search, "");
    document
      .getElementById("newTab")
      .setAttribute(
        "href",
        URL.split("#")[0] + "sidebar/sidebar-menu/index.html"
      );
  }
  //open the sidebar
  openClick() {
    this.sidebarobj.toggle();
  }
}

// ReactDOM.render(<Client />, document.getElementById('root'));





