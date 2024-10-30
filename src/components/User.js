import { useState } from "react"
const User =({name,location})=>{
    const [Count] = useState(0)
    const [Count2] = useState(2)
return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
       <h2>{name}</h2>
       <h3>{location}</h3>
       <h3>Count= {Count}</h3>
       <h3>Count2 ={Count2} </h3>
    </div>
)
}

export default User