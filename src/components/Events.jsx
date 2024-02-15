import Event from "./Event"
import listEvent from "../data/events.json"
import {Row} from "react-bootstrap"
import { useEffect, useState } from "react"
import Alert from 'react-bootstrap/Alert';

export default function Events(){
    const [showAlert,setshowAlert]= useState(false)
    const [showWelcome,setshowWelcome]=useState(false)
    const modifAlert=()=>{
        setshowAlert(true);
        setTimeout(()=>setshowAlert(false),1000);
    }
    useEffect(()=>{
        setshowWelcome(true),
        setTimeout(()=>setshowWelcome(false),3000)
    return ()=>{
       console.log("unmounting")
       
    }},[])
    return <>
    {showWelcome && <Alert variant="success">
        bienvenue
    </Alert>

    }
    <Row>
    {
    listEvent?.map((element , index)=>{
    
    return<Event key={index} e={element} fonctionAlert={modifAlert}/>
    })
}</Row>
{showAlert && <Alert variant="success">
        you have booked an event!
        </Alert>}
    </>
    
    }