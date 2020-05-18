
import {BUY_CAKE,BUY_ICE,BUY_SUCCESS,BUY_ERROR} from './actionTypes';
import {unregister} from '../../components/commonFun/interceptor';

export const buycake = () =>{
    return {
        type : BUY_CAKE
    }

}

export const buyicecream = () =>{
    return {
        type : BUY_ICE
    }

}
const buysuceess = (data) =>{
    return {
       type : BUY_SUCCESS,
       payload : data
    }
}
const buyerror = (error)=>{
    return {
        type : BUY_ERROR,
        payload : error  
    }
}

export const fetchusers = () =>{
    return (dispatch)=> {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }
            }).then(response => response.json())
            .then(data => {
               console.log('Success:', data);
               dispatch(buysuceess(data));
            })
            .catch((error) => {
                console.error('catch Error:', error);
              dispatch(buyerror(error))  
            
            });
    }
}