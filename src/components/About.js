import UserContext from "../utils/UserContext"
import User from "./User"
import UserClass from "./UserClass"
import React, { useContext } from "react"

class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("Parent constructor")
    }
    componentDidMount(){
    }
    render(){
        return (
            <div>
                <h1>This is About page</h1>
                <div className="font-bold">
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1>User: {loggedInUser}</h1>
                        }
                    </UserContext.Consumer>
                </div>
                <UserClass login={"First"} id={1234}/>
            </div> )}}
export default About

