import userEvent from "@testing-library/user-event";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fmts1-1.fna.fbcdn.net/v/t1.0-9/23844450_1947672231917265_6387233130332007316_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=WAvGGNIilecAX_xr_zu&_nc_ht=scontent.fmts1-1.fna&oh=d609e4caa68bae7db072c8f3293c648a&oe=5FDF0495"
        title="JohnsonJDSD"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
