import React, { useState } from 'react';
export default {
  title: 'React.memo.demo'
}

const NewMessagesCounter = (props: { count: number }) => {
  console.log('count');
  return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
  console.log('aadad');

  return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)
const MesssageCount = React.memo(NewMessagesCounter)

export const Example1 = () => {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Vika', 'Maksim', 'Alexey'])
  const addUser = () => {
    const newUsers =[...users,'Sveta' + new Date().getTime()] 
    setUsers(newUsers)
  }
  return (
    <div>
      <button onClick={() => { setCounter(counter + 1) }}>+</button>
      <button onClick={() => addUser() }>add User</button>
      <MesssageCount count={counter} />
      <Users users={users} />
    </div>
  )
}