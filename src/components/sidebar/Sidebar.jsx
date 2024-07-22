import "./sidebar.css";

import { LineStyle , Timeline , TrendingUp, WorkOutline , Report, Message , Mail} from "@material-ui/icons";
export default function Sidebar (){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListitem active">
                        <LineStyle className="sidebarIcon"/>
                            Home

                        </li>
                        <li className="sidebarListitem">
                        <Timeline className="sidebarIcon"/>
                            Analytics

                        </li>
                        <li className="sidebarListitem">
                        <TrendingUp className="sidebarIcon"/>
                            Sales

                        </li>
                    </ul>
               
                </div>

            </div>

           
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListitem active">
                        <LineStyle className="sidebarIcon"/>
                            Users

                        </li>
                        <li className="sidebarListitem">
                        <Timeline className="sidebarIcon"/>
                            Products

                        </li>
                        <li className="sidebarListitem">
                        <TrendingUp className="sidebarIcon"/>
                            Transations

                        </li>
                        <li className="sidebarListitem">
                        <TrendingUp className="sidebarIcon"/>
                            Reports

                        </li>
                    </ul>
               
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notificatons</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListitem active">
                        < Mail className="sidebarIcon"/>
                            Mail

                        </li>
                        <li className="sidebarListitem">
                        <Timeline className="sidebarIcon"/>
                            Feedback

                        </li>
                        <li className="sidebarListitem">
                        <Message className="sidebarIcon"/>
                            Message

                        </li>
                    </ul>
               
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListitem active">
                        <WorkOutline className="sidebarIcon"/>
                            Manage

                        </li>
                        <li className="sidebarListitem">
                        <Timeline className="sidebarIcon"/>
                            Analytics

                        </li>
                        <li className="sidebarListitem">
                        <Report className="sidebarIcon"/>
                            Reports

                        </li>
                    </ul>
               
                </div>
 
    </div>
    )
}
