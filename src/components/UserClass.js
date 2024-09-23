import React from "react";

class UserClass extends React.Component{
constructor(props){
    super(props)
    this.state={
        userInfo: {
            login:"xyz",
            id: 1234
        }
    }
    console.log("This is a constructor")
}


async componentDidMount(){
    const data = await fetch("https://api.github.com/users/tk-droid")
     const json = await data.json()
     this.setState({
        userInfo : json
     })
    console.log(json)
}

componentWillUnmount(){
    console.log("This is componentWillUnmount")
}

render(){
    const{login, id} = this.state.userInfo
    return (
        <div className="user-card">
           <h2>{login}</h2>
           <h2>{id}</h2>
           
        </div>
    )
}
}

export default UserClass