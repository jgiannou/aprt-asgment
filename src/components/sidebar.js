import React, {  useState,useEffect } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas'
import UsersDataService from '../api/service';
import './sidebar.scss' 
import {BsEnvelopeFill,BsFillFilePersonFill,BsFillTelephoneFill,BsPinAngleFill} from "react-icons/bs";
function Sidebar(props) {
  const [users, setUsers] = useState([])
  const id = props.currentId 
  const fetchData = () => {
    UsersDataService.get(id).then((response)=>{
        const res = response.data
        setUsers(res)
    });
  }
 
 useEffect(() => {
    fetchData()
  }, [id])
        

        return (
        <Offcanvas show={props.show} onHide={props.hide} scroll={true} backdrop={false} placement={props.placement} className="sidebar">
          <Offcanvas.Header closeButton>
            {users && (<Offcanvas.Title>User: {users.firstName}</Offcanvas.Title>)}
          </Offcanvas.Header>
          <Offcanvas.Body>
          {users &&
            <> 
           <img className="avatar" src={users.picture} alt="user-avatar"/>
           <div>
           <p className="mb-0 mt-4">{users.title}</p>
           <h3 className="my-0">{users.firstName}</h3>
           <h3>{users.lastName}</h3>
           </div>
           <div> <BsEnvelopeFill /> : {users.email}</div>
           <div><BsFillTelephoneFill/> : {users.phone}</div>
         { users.location && <div><BsPinAngleFill/> : {users.location.street}, {users.location.country}</div>}
           <div><BsFillFilePersonFill/> : {users.gender}</div>

           </>
          }
          </Offcanvas.Body>
        </Offcanvas>
    );
  }
  
  export default Sidebar