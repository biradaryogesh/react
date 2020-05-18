import React ,{useEffect,useState} from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

//const state = 

const Piechart =({buycake})=> {
       
      const [state,setState] = useState({
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [65, 59, 80, 81, 56]
          }
        ]
      });

      useEffect(() => {
       // state.data = [Math.random(),Math.random(),Math.random(),Math.random(),Math.random()];
       var stateCopy = Object.assign({},state);
       stateCopy['datasets'][0]['data'] = [Math.random(),Math.random(),Math.random(),Math.random(),Math.random()];
       setState(
         
        stateCopy
       )
        console.log("inside piechart",state)
    }, [buycake]);
 console.log("state",state)
    return (
      <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }

export default Piechart