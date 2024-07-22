import { Tooltip } from "@material-ui/core";
import "./chart.css" 
import { LineChart,Line, XAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Title } from "@material-ui/icons";

export default function Chart({title , data , dataKey , grid }) {
  
      
  return (
    <div className="chart">
      <h3 className="chartTitle">{Title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#5550bd"/>
              <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
              <Tooltip />
              { grid && <CartesianGrid stroke="white" strokeDasharray="5 5"/> }
            </LineChart>
      </ResponsiveContainer>
      <CartesianGrid />
    <legend />
    </div>
  );
}
