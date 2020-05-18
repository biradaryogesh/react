import React, { Component ,useEffect} from 'react'
import { connect } from 'react-redux';
import {buycake,fetchusers} from '../redux/actions/buycake';
import Piechart from './piechart';
import Barchart from './barchart';

const Buycake = (props)=>{
    console.log("buy cake props..",props);
    const chartdata = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [97, 59, 80, 81, 56]
          }
        ]
      }
    useEffect(() => {
        console.log("buy cake call")
        props.fetchuser();
      }, [props.numberOfcake]);
    //   useEffect(() => {
    //     props.fetchuser();
    //     console.log("buy calling func")
    //   }, []);
      const lickick = (id) =>{
          console.log("id...",id)
      }
    return (
        <div className="container">
            <div>
                <p>Total Cake : {props.numberOfcake}</p>
                <button onClick={props.BuyCake}>Buy Cake</button>
            </div>
            <div className="row">
                <div className="col-md-6">
                     <Piechart buycake={props.numberOfcake}></Piechart>
                </div>
                <div className="col-md-6">
                    <Barchart chartdata={chartdata}></Barchart>
                </div>    
            </div>
            <div>

                <ul>
                   {
                        props.userlist.map((data,index) =>{
                        return <li key={data['id']} onClick={()=>lickick(data['id'])}><span>{index}</span>.. {data['title']}</li>
                        })
                    }
                    
                </ul>
                {
                    props.error?(<><p className="App-logo App-logo-spin">api error occured </p><p>it will work {false?<span>....</span>:''}</p></>):''
                }
            </div>
        </div>
    )
}

const stateToPropsmap = (state,ownprops)=>{
    return {
        numberOfcake : state.cake.numberOfcake,
        userlist : state.cake.userlist,
        error : state.cake.error
    }
}

const mapDispatchToProps = (dispatch,ownprops) => {
    return {
        BuyCake : () => {dispatch(buycake())},
        fetchuser : () =>dispatch(fetchusers())
    }
}
export default connect(stateToPropsmap,mapDispatchToProps)(Buycake);