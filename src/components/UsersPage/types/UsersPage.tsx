import { useEffect, useState, type JSX } from "react";
import type User from "./User";
import { Link } from "react-router-dom";

export default function UsersPage():JSX.Element {

const [user, setUser] = useState<User[]> ([])

async function loadUsers(): Promise<void> {
    const response = await fetch("https://fakestoreapi.com/users");
    const arr = await response.json();
    setUser(arr)
}
useEffect(()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadUsers()
}, [])

  return (
    <div>
      <ul>
        {user.map((user)=>(
            <li style={{border: 'solid black 2px', margin:'10px'}} key={user.id}>
            <div>Ник: {user.username}</div>
            <div>Имя,Фамилия: {user.name.firstName}  {user.name.lastName}</div>
            <div>Телефон: {user.phone}</div>
            <div>Email: {user.email}</div>
            <div>Zip-code: {user.address.zipcode}</div>
            <Link to={String(user.id)} >To User</Link>
    
            </li>
        ))}
      </ul>
    </div>
  )
}
