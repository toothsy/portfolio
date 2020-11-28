import React,{createContext,useState} from 'react'
const EventHua = createContext();
export default function EventContext(props) {
    const [clicked, setClicked] = useState(null)
    // const [firstTime, setfirstTime] = useState(false)
    return (
   <EventHua.Provider value={{clicked,setClicked}}>
    {props.children}
   </EventHua.Provider >
    )
}
export {EventHua,EventContext}