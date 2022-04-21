import React, {  useState } from "react";
import Accordion from 'react-bootstrap/Accordion'

function CommentsAccordion(props) {

    const data= props.data
    return (
    <Accordion>
         {data.map((comment) => (
    <Accordion.Item eventKey={comment.id} key={comment.id}>
        <Accordion.Header>User {comment.owner.firstName} commented :</Accordion.Header>
        <Accordion.Body>
        {comment.message}
        </Accordion.Body>
    </Accordion.Item>
     ))}
    </Accordion>
    );
  }
  
  export default  CommentsAccordion