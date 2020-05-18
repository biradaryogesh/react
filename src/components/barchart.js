import React from 'react';
import {Bar} from 'react-chartjs-2';



const Barchart = ({chartdata})=> {
    return (
      <div>
        <Bar
          data={chartdata}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        console.log("tooltipItem",tooltipItem,data)
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';
    
                        if (label) {
                            label += ': ';
                        }
                        label += '.......: '+ Math.round(tooltipItem.yLabel * 100) / 100;
                        return label;
                    }
                }
            }
          }}
        />
      </div>
    );
}
export default Barchart