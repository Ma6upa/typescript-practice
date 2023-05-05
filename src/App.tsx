import React, { useState, useEffect } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    } finally {

    }
  }

  return (
    <div>
      <Card onClick={(num) => console.log('click', num)} width='200px' height='200px' variant={ CardVariant.outlined }>
        <button>childrenBtn</button>
        <div>
          <span>
            childrenText
          </span>
        </div>
      </Card>
      <UserList users={users}/>
    </div>
  );
}

export default App;
