
import { useRouteError } from "react-router-dom"


const Error = ()=>{
    const err  = useRouteError()
    console.log("Error Caught",err)
    return(
        <div className="error-container">
            <h2>Error: {err.status || "Unknown"}</h2>
            <h1>Either use : </h1>
            <h1>For About Page: /About</h1>
            <h1>For Contact Page: /Contact</h1>
            <h1>For Home Page: /</h1>
        </div>
    )
}

export default Error