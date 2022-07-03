import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import './components/Users/AddUser.module.css'
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
