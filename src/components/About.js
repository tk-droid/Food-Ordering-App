import UserContext from "../utils/UserContext"
import User from "./User"
import React, { useContext } from "react"
import { lazy, Suspense } from "react"
const UserClass = lazy(()=>import("./UserClass"))

class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("Parent constructor")
    }
    componentDidMount(){
        // console.log("About js componenetDidMount")
    }
    render(){
        // console.log("parent render")
        return (
            <div className="text-center">
                <h1 className="font-bold">This is About page</h1>
                <div className="">
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1>User: {loggedInUser}</h1>
                        }
                    </UserContext.Consumer>
                </div>
                <Suspense fallback={<div>Loading User Info...</div>}>
                <UserClass login={"First"} id={1234}/>
                </Suspense>
                {/* <UserClass login={"Second"} id={5678}/> */}
            </div> )}}
export default About

