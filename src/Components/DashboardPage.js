import React from 'react'
import { useNavigate } from 'react-router-dom'
function DashboardPage() {
    let navigate = useNavigate();
    function goToUserListPage() {
        navigate('/userlist')
    }
    function addUsers() {
        navigate('/adduser')
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={addUsers}>
                Add Users
            </button>
            <button type="button" onClick={goToUserListPage}>
                show Table
            </button>
        </div>
    )
}

export default DashboardPage