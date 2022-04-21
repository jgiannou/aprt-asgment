import React, { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table'
import Sidebar from "./sidebar";
import UsersDataService from '../api/service';
import './usersTable.scss'
import Pagination from 'react-bootstrap/Pagination'

const UsersTable = (props) => {
 const [show, setShow] = useState(false)
 const [currentUser,setCurrentUser]= useState('')
 const [currentIndex,setCurrentIndex] = useState('')
 const [page,setPage] = useState(0)
 const [limit,setLimit] = useState(10)
 const [users, setUsers] = useState([])



 const fetchData = () => {
   UsersDataService.getAllPaged(page,limit).then((response)=>{
       const res = response.data.data
       setUsers(res)
   });
 }
 
useEffect(() => {
   fetchData()
 }, [page])

 const setActiveUser = (user,index) =>{
  setCurrentUser(user)
  setCurrentIndex(index)
  setShow(true)
 }


let active = page;
let items = [];
for (let number = 0; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active} onClick={()=>setPage(number)}>
      {number}
    </Pagination.Item>,
  );
}


   return (
    <div className="wrap" >
        { show?
        <Sidebar show={show} hide={() => setShow(false)} currentId={currentUser.id} placement={'end'}/> 
      : 
        <span className="cta-text"><i>Click on user for more info</i></span>
        }
    <div className="table-wrap">
        <div className="table-title">
            <h2>Users List</h2>
        </div>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>First Name</th>
                <th>Last Name</th>
                </tr>
            </thead>
            {users.length > 0 && (
            <tbody>
            {users.map((user,index) => (
            <tr onClick={()=> setActiveUser(user,index)} key={index}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
            </tr>
          ))}
            </tbody>
          )}
        </Table>
        <Pagination>
             <Pagination.Prev onClick={()=>{page >= 1 && setPage(page - 1) }} />
             {items}
             <Pagination.Next onClick={()=>{page < 5 && setPage(page + 1) }} />
             </Pagination >
        </div> 
    </div>
  )
}


export default UsersTable