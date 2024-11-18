import React from "react"

const Contact = ()=>{
return (
    <div className="text-center">
        <h1 className="font-bold text-3xl p-3 m-3">This is a Contact Page</h1>
        <form>
            <div className="m-2">
            <input type="text" className="border border-black p-2 m-2" placeholder="Name"/>
            </div>
            <div className="m-2">
            <input type="email" className="border border-black p-2 m-2" placeholder="Email"/>
            </div>
            <div className="m-2">
                <textarea className="border border-black p-2 m-2 w-5/12 h-40" placeholder="Message"></textarea>
            </div>
            <div className="m-2">
            <button className="border border-black p-2 m-2 bg-green-300 hover:bg-green-400 rounded-3xl">Submit</button>
            </div>
        </form>
    </div>
)    
}

export default Contact