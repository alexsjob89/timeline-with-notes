import React,{useState} from "react";
import {v4 as uuidv4} from "uuid";
import './App.css';

import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 48rem;
align-items: center;
justify-content: center;
text-align: center;
`;

const Button = styled.button`
  margin: 10px;
  background-image: linear-gradient(to top, pink, red, pink);
  border-radius: 8px;
  border: none;
  padding: 5px;
  color: white;
`;

const TimelineEvent = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 5px;
  width: 50%;
  background-color: rgb(20, 20, 10, 0.6);
`;

function App() {


const [events, setEvents] = useState([]);



const addEvent = () => {
  const newEvent = {
    id: uuidv4(),
    note: "New event",
  };
  setEvents([...events, newEvent]);
};

const removeEvent = (id) => {
  setEvents(events.filter((event) => event.id !== id));
};

  return (
    <div className="App">

<Container>
      <h1>Timeline</h1>
      <Button onClick={addEvent}>Add Event</Button>
      {events.map((event) => (
        <TimelineEvent key={event.id}>
          {event.note}
          <Button onClick={() => removeEvent(event.id)}>Remove</Button>
<textarea name="" style={{fontSize: "25px", width: "20rem", borderRadius: "10px", padding: "10px"}}></textarea>

        </TimelineEvent>
      ))}
    </Container>
    </div>
  );
}

export default App;
