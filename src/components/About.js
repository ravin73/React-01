import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"

class About extends Component {
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"dummy",
              
            }
        }
    }
   async componentDidMount(){
        const data =await fetch("https://api.github.com/users/ravin73");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
                             
    }
    render() {
        const {name,location}=this.state.userInfo
        return (
            <div className="user-card">
                <h1>{name}</h1>
                <h2>{location}</h2>
              
            </div>
        )
    }
}
// const About=()=>{
//     return(
//         <div>
//             <h1>About Us</h1>
//             <User/>
//             <UserClass name={"classy"}/>    
//         </div>
//     )
// }
export default About