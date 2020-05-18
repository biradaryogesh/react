import React from 'react';
import {setSession} from './commonFun/session';
import { useHistory } from 'react-router-dom';
const Login = ()=>{
    const history = useHistory()
    const loginfun = ()=>{
      console.log("login...",history)
      setSession({status:true,role:'admin'});
      history.push('/protected',{id:12});
    }
    return(<div className="container">
            
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
               
                <button type="button" onClick={loginfun} className="btn btn-primary">Login</button>
            </form>
        </div>)
}

export default Login;