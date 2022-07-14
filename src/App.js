import React, {useState} from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import DashboardPage from './Components/DashboardPage';
import UserList from './Components/UserList';
import AddUsers from './Components/AddUsers';

function App() {
  const [userListData,setUserListData] = useState([])
  const addUser = (data)=>
  {
    console.log("added",JSON.stringify(data))
    setUserListData(prevState=>(
      [...prevState,data]
    ))
  }
  return (
  <>
 

  <BrowserRouter>
<Routes>
  
<Route path="/" element={<LoginPage></LoginPage>} />
  <Route path="/dashboard" element={<DashboardPage></DashboardPage>} />
  <Route path="/userList" element={<UserList list ={userListData}></UserList>} />
  <Route path="/adduser" element={<AddUsers adduser={addUser}></AddUsers>} />
{/* <Route path='/edit' element={<Editform list={userData} ></Editform>}/> */}
</Routes>
 </BrowserRouter>
  </>
  );
}

export default App;
