import React, { createContext, useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import DashboardPage from './Components/DashboardPage';
import UserList from './Components/UserList';
import AddUsers from './Components/AddUsers';
import EditUser from './Components/EditUser';
const userFormData = createContext();
function App() {
  const [userListData, setUserListData] = useState([
    { id: 1,firstName:"vijay", lastName : "kumar", email: "vk@gmail.com", password: "Miri@123"}
  ])

  const addUserData = (data) => {
    console.log(data);
    console.log("added", JSON.stringify(data))
    setUserListData(prevState => (
      [...prevState, data]
    ))
  }
  const editUserData = (data) =>{
console.log(data);
const index = userListData.findIndex(item => item.id == data.id)
if(index!=-1){
  userListData[index].firstName = data.firstName;
  userListData[index].lastName = data.lastName;
  userListData[index].email = data.email;
  userListData[index].password = data.password;
  setUserListData([...userListData]);

}
  }
  return (
    <>



      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LoginPage userList={userListData}></LoginPage>} />
          <Route path="/dashboard" element={<DashboardPage></DashboardPage>} />
          <Route path="/userList" element={<userFormData.Provider value={userListData}>
            <UserList list={userListData}></UserList>
          </userFormData.Provider>} />
          <Route path="/adduser" element={<AddUsers list={userListData} addUser={addUserData}></AddUsers>} />
          <Route path="/edituser" element={<EditUser  list={userListData} editUser={editUserData} ></EditUser>} />
          {/* <Route path='/edit' element={<Editform list={userData} ></Editform>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
export { userFormData }