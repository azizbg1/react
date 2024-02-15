import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import{useState,useEffect} from "react";


export default function Event(props){
    const changelike=()=>{
        SetEvent((previousE)=>({...previousE,
        like:!previousE.like
        }))
    }
const [e , SetEvent]=useState(props.e)
const bookEvent=()=>{props.fonctionAlert();
    SetEvent((previousE)=>({...previousE,nbParticipants:previousE.nbParticipants+1,nbTickets:previousE.nbTickets-1}))}
return <> 

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.nbTickets===0?"images/sold_out.png" :`images/${e.img}`} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>
         {e.description}
        </Card.Text>
       <p> price: {e.price}</p>
       <p> nbParticipants: {e.nbParticipants}</p>
       <p> nombreTickets: {e.nbTickets}</p>



       <Button variant="danger" onClick={changelike}>{e.like?"dislike":"like"}
            
          </Button>
       <Button variant="primary" onClick={bookEvent} disabled={e.nbTickets === 0}>
            book a ticket
          </Button>
        </Card.Body>
      </Card>
</>

}