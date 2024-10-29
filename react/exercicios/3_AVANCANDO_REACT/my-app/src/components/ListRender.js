import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Pedro", "matheus", "jose"])

    const [users, setUsers] = useState([
        {id: 1, name: "matheus", age: 28,},
        {id: 2, name: "pedro", age: 48,},
        {id: 3, name: "jonas", age: 41,}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
    
        setUsers((prevUsers) => {
          return prevUsers.filter((user) => randomNumber !== user.id);
        });
      };
    

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}> {user.name} - {user.age} </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete user</button>
    </div>
  )
}

export default ListRender