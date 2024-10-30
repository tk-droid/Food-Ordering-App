import React from "react"

const Contact = ()=>{
return (
    <div>
        <h1 className="font-bold text-3xl p-3 m-3">This is a Contact Page</h1>
        <form>
            <input type="text" className="border border-black p-2 m-2" placeholder="Name"/>
            <input type="text" className="border border-black p-2 m-2" placeholder="Message"/>
            <button className="border border-black p-2 m-2 bg-green-300 hover:bg-green-400 rounded-3xl">Submit</button>
        </form>
    </div>
)    
}

export default Contact