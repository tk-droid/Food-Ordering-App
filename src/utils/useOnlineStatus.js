import { useEffect, useState } from "react"


const useOnlineStatus = ()=>{
const [onlineStatus, setonlineStatus] = useState(navigator.onLine)


useEffect(()=>{
    window.addEventListener("online", ()=>{
        setonlineStatus(true)
    })
    window.addEventListener("Offline", ()=>{
       setonlineStatus(false)
    })
    return ()=>{
        window.addEventListener("online", ()=>{
            setonlineStatus(true)
        })
        window.addEventListener("Offline", ()=>{
           setonlineStatus(false)
        })
    }
},[])

    return onlineStatus
}

export default useOnlineStatus