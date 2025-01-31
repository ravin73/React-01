import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    render(){
        const {name}=this.props;
        const {count}=this.state
        return (
            <div className="user-card">
                <h1>{count}</h1>
                <button onClick={()=>{
                    // Never update state variables directly
                    this.setState({
                        count:this.state.count+1
                    })
                }}> Count Increase</button>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    })
                }}>Count Decrease</button>
                <h2>Name:{name}</h2>
                <h3>Location: lapata jindagi se</h3>
                <h4>Contact : @notavavi</h4>
            </div>
         )  
    }
}
export default UserClass