import React, { useEffect, useState } from "react";
import './App.scss';
import UsersTable from './components/usersTable';
import UsersChart from "./components/usersChart";
import UsersDataService from './api/service';
import NavigationBar from "./components/navbar";

function App() {

  const [users, setUsers] = useState([])

  const fetchData = () => {
    UsersDataService.getAll().then((response)=>{
        const res = response.data.data
        setUsers(res)
    });
  }
 
 useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div className="App">
      <NavigationBar />
      <div className="d-flex row wrapper my-5">
      <div className="col-md-8"> 
      <UsersTable users={users}/>
      </div>
      <div className="col-md-4 d-flex align-items-center">
      <UsersChart users={users} />
      </div>
      </div>
    </div>
  );
}

export default App;
