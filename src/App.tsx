import { useState } from 'react';
import './App.css';

function App() {
  type User = {
    id: number;
    name: string;
  };

  const [users, setUsers] = useState<User[]>([
    { id: 1, name: '田中' },
    { id: 2, name: '佐藤' },
  ]);

  function addUser(): void {
    setUsers((prev) => [...prev, { id: users.length + 1, name: '鈴木' }]);
  }

  function deleteUser(): void {
    const newList = users.filter((user) => user.name !== '佐藤');
    setUsers(newList);
  }

  function updateUser(name: string) {
    const newList = users.map((user) => {
      if (user.name === name && name === '田中') {
        return {
          ...user,
          name: '田中さん',
        };
      }
      return user;
    });
    setUsers(newList);
  }

  return (
    <>
      <section id="center">
        <ul>
          {users.map((user) => (
            <li onClick={() => updateUser(user.name)}>
              {user.id}：{user.name}
            </li>
          ))}
        </ul>
        <button onClick={addUser}>ユーザー追加</button>
        <button onClick={deleteUser}>ユーザー削除</button>
      </section>
    </>
  );
}

export default App;
