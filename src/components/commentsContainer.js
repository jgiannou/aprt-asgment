import React, {  useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Button } from "react-bootstrap";
import CommentsAccordion from "./commentsAccordion";
 
  
function CommentsContainer(props) {
    
        const comments = props.comments
        return (
        <Offcanvas show={props.show} onHide={props.hide} scroll={true} backdrop={false} placement={props.placement}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>User Comments</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
       <CommentsAccordion data={comments} /> 
          </Offcanvas.Body>
        </Offcanvas>
    );
  }
  
  export default CommentsContainer