import { useState } from "react";

const User=()=>{
    const [count]=useState(0);
 return (
    <div className="user-card">
        <h1>Count -{count}</h1>
        <h2>Name: Ravin</h2>
        <h3>Location: lapata jindagi se</h3>
        <h4>Contact : @notavavi</h4>
    </div>
 )   
}
export default User;