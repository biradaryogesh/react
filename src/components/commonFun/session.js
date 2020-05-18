const setSession = (login)=>{
    window.sessionStorage.setItem("login", JSON.stringify(login));
}
const getSession = () =>{
    return window.sessionStorage.getItem("login");
}

export {getSession,setSession}