
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import DashboardPage from './Components/DashboardPage';
import UserList from './Components/UserList';
import AddUsers from './Components/AddUsers';

function App() {
  return (
  <>
 

  <BrowserRouter>
<Routes>
  
<Route path="/" element={<LoginPage></LoginPage>} />
  <Route path="/dashboard" element={<DashboardPage></DashboardPage>} />
  <Route path="/userList" element={<UserList></UserList>} />
  <Route path="/adduser" element={<AddUsers></AddUsers>} />
{/* <Route path='/edit' element={<Editform list={userData} ></Editform>}/> */}
</Routes>
 </BrowserRouter>
  </>
  );
}

export default App;
