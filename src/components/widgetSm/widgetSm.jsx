import "./widgetSm.css"
import Visibility from '@mui/icons-material/Visibility';

export default function widgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Now Join Members</span>
       <ul className ="wodgetSmListe">
            <li className="widgetSmListItem">
                <img src="https://www.pexels.com/fr-fr/photo/vue-panoramique-sur-la-foret-depuis-la-voiture-1261731/" alt=" " className="widgetSmImg" />
                <div className="getSmUser">
                    <span className="widgetUsername">Anna</span>
                    <span className="widgetUserTitle">Software Engineer</span>
                </div>
              <button className="widgetSmButton">
           
           
           
           <Visibility className="widgetSmIcon"/>
           
           Display

            </button>

                </li>   
                </ul>
                </div>

    
  )
}