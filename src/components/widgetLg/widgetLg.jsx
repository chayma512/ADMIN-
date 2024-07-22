import { Table } from "@material-ui/core"
import "./widgetLg.css"

export default function widgetLg() {
  const Button = ({type}) => {
    return <Button className={"widgetLgButton" + type }>{type}</Button>
  }
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
        <Table className="WidgetTable">
          <tr className="widgetTr">
            <th className="widgetTh">Customer</th>
            <th className="widgetTh">Date</th>
            <th className="widgetTh">Amount</th>
            <th className="widgetTh">Status</th>


            </tr>
            <tr className="widgetLgTr">
              <td className="xidgetLgUser">
                <img src="https://www.pexels.com/fr-fr/photo/vue-panoramique-sur-la-foret-depuis-la-voiture-1261731/" alt="" className="widgetLgImg" />
                <span className="widgetLgName">chiha</span>
              </td>
              <td className="widgetLgDate">2 jun 2021</td>
              <td className="widgetAmount">$122</td>
              <td className="widgetStatus">
              <button type ="Approved"/>


              </td>

            </tr>
            <tr className="widgetLgTr">
              <td className="xidgetLgUser">
                <img src="https://www.pexels.com/fr-fr/photo/vue-panoramique-sur-la-foret-depuis-la-voiture-1261731/" alt="" className="widgetLgImg" />
                <span className="widgetLgName">chiha</span>
              </td>
              <td className="widgetLgDate">2 jun 2021</td>
              <td className="widgetAmount">$122</td>
              <td className="widgetStatus">
              <button type ="Declined"/>


              </td>

            </tr>
            <tr className="widgetLgTr">
              <td className="xidgetLgUser">
                <img src="https://www.pexels.com/fr-fr/photo/vue-panoramique-sur-la-foret-depuis-la-voiture-1261731/" alt="" className="widgetLgImg" />
                <span className="widgetLgName">chiha</span>
              </td>
              <td className="widgetLgDate">2 jun 2021</td>
              <td className="widgetAmount">$122</td>
              <td className="widgetStatus">
              <button type ="Pending"/>


              </td>


            </tr>
            <tr className="widgetLgTr">
              <td className="xidgetLgUser">
                <img src="https://www.pexels.com/fr-fr/photo/vue-panoramique-sur-la-foret-depuis-la-voiture-1261731/" alt="" className="widgetLgImg" />
                <span className="widgetLgName">chiha</span>
              </td>
              <td className="widgetLgDate">2 jun 2021</td>
              <td className="widgetAmount">$122</td>
              <td className="widgetStatus">
              <button type ="Approved"/>


              </td>

            </tr>
        </Table>
    </div>
  )
}
