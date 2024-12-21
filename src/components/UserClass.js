import React, { memo, useState } from "react";
import { useEffect } from "react";


const UserClass = memo(()=>{
const [UserInfo, setUserInfo] = useState(null)

 useEffect(()=>{
    fetchUserInfo()
 },[])
 
const fetchUserInfo = async ()=>{
const response = await fetch("https://api.github.com/users/tk-droid")
const json = await response.json()
// console.log(json)
setUserInfo(json)
}
return (
    <div className="user-card">
      {UserInfo ? (
        <>
          <h2>GitHub UserName : {UserInfo.login}</h2>
          
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
)

// class UserClass1 extends React.Component{
// constructor(props){
//     super(props)
//     this.state={
//         userInfo: {
//             login:"xyz",
//             id: 1234
//         }
//     }
//     console.log("This is a child constructor")
// }

// //async componentDidUpdate in place of..
// // ..componentDidMount to avoid multiple calls 
// async componentDidUpdate(){
//     const data = await fetch("https://api.github.com/users/tk-droid")
//      const json = await data.json()
//      this.setState({
//         userInfo : json
        
//      })
//     console.log("userClass ComponentDidMount")
// }

// componentWillUnmount(){
//     console.log("This is componentWillUnmount")
// }

// render(){
//     console.log("This is a child render")
//     const{login, id} = this.state.userInfo
//     return (
//         <div className="user-card">
//            <h2>{login}</h2>
//            <h2>{id}</h2>
           
//         </div>
//     )
// }
// }

export default UserClass