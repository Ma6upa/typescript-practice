import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {
  const users: IUser[] = [
    {id: 1, name: 'Valera', email: 'yuvalerka@mail.ru', address: {city: 'Izhevsk', street: 'Pushkina', zipcode: '228'}},
    {id: 2, name: 'Rail', email: 'rail14@mail.ru', address: {city: 'Kazan', street: 'plohaya', zipcode: '1337'}},
  ]
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
