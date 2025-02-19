import React from "react";
import "./Topbar.css";
import {NotificationsNone ,Language , Settings} from "@material-ui/icons";
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">admin</span>
            </div>

            <div className="topRight">
                <div className="topbarIconsContainer">
             <NotificationsNone />
            <span className="topbarBadge">2</span>
            </div>
    
            <div className="topbarIconsContainer">
             <Language />
            <span className="topbarBadge">2</span>
            </div>
             <div className="topbarIconsContainer">
             <Settings />
             </div>
            <img src="" alt="" className="topAvatar" />
            
</div>
</div>
</div>
);
    

}
