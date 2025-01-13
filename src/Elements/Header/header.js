import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Pices/funz-logo.svg";

function header() {
  return (
    <div className="headerParent">
      <div className="headerBox">
        <Link to="/">
          <img src={Logo} alt="logo" class="headerLogo" />
        </Link>
        <div className="headerSeaarchBarDiv">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            name="searchEventsBar"
            id="searchEventsBar"
            placeholder="Search events"
          />
          <i class="fa-solid fa-location-dot"></i>
          <input
            type="text"
            name="chooseALocationBar"
            id="chooseALocationBar"
            placeholder="Choose a location"
          />
          <i class="fa-solid fa-magnifying-glass searchIconRed"></i>
        </div>
        <div className="headerMenu">
          <span className="headerMenuUI_Header">Find Events</span>
          <span className="headerMenuUI_Header">Create Events</span>
          <ul className="headerMenuUI">
            <span className="headerMenuUI_LIHeader">Help Center</span>
            <span className="headerMenuUI_LI">
              <li>Help Center</li>
              <li>Find your tickets</li>
              <li>Contact your event organizer</li>
            </span>
          </ul>
          <span className="headerMenuUI_Header">Find my tickets</span>
          <span className="headerMenuUI_Header">Log In</span>
          <span className="headerMenuUI_Header">Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default header;
