import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent constructor")
    }

    componentDidMount(){

    }

    render(){
        return (
            <div>
                <h1>This is About page</h1>
                <UserClass login={"First"} id={1234}/>
            </div>
        )
    }
}


export default About

