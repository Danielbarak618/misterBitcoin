
import { Sparklines,  SparklinesLine } from 'react-sparklines';

export  function Chart({data , color , title}) {
    
        return (
            <div className="chart">
                <h1>{title}</h1>
               <Sparklines   data={data} 
               limit={150} 
               width={100} 
               height={20} 
               margin={5}>
               <SparklinesLine style={{ stroke: color, strokeWidth: "0.3", fill: color }} />
                </Sparklines>
            </div>
        )
    
}
