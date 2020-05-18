import React from 'react';

const ProtectedPage = (props) =>{
    console.log("protected..",props);
    return(
        <div className="container">
            <p>I am protected</p>
        </div>
    )
}
export default ProtectedPage;