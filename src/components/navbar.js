import React, {  useEffect,useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import CommentsContainer from "./commentsContainer";
import UsersDataService from '../api/service'

function NavigationBar() {
    const [show, setShow] = useState(false)
    const [comments, setComments] = useState([])
  
    
    const fetchComments = () => {
      UsersDataService.getAllComments().then((response)=>{
          const res = response.data.data
          setComments(res)
      });
    }
   
   useEffect(() => {
      fetchComments()
    }, [])

    const data=comments

        return (
             <Navbar  variant="dark" style={{background:'#326273'}}> 
            <Container>
            <Navbar.Brand role="button" onClick={()=> setShow(true)}>Admin</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
            </Container>
            { show &&
        <CommentsContainer show={show} hide={() => setShow(false)} comments={data} placement={'start'}/> 
        }
          </Navbar>
    );
  }
  
  export default  NavigationBar