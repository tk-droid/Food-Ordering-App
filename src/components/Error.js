
import { useRouteError } from "react-router-dom"


const Error = ()=>{
    const err  = useRouteError()
    console.log(err)
    return(
        <div className="error-container">
            <h2>Error: {err.status}</h2>
            <h1>Either use : </h1>
            <h1>For About Page: http://localhost:1234/About</h1>
            <h1>For Contact Page: http://localhost:1234/Contact</h1>
            <h1>For Home Page: http://localhost:1234/</h1>
        </div>
    )
}

export default Error