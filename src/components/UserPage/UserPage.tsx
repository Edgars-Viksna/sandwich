import { useEffect, useState, type JSX } from "react";
import type User from "../UsersPage/types/User";
import { Link, useParams } from "react-router-dom";

export default function UserPage(): JSX.Element {
  const { userId } = useParams();
  const initialValue: User = {
    id: 0,
    email: "",
    username: "",
    password: "",
    name: {
      firstName: "",
      lastName: "",
    },
    address: {
      city: "",
      street: "",
      number: 0,
      zipcode: "",
      geolacation: {
        lat: "",
        long: "",
      },
    },
    phone: "",
  };
  const [user, setUser] = useState<User>(initialValue);
  useEffect(() => {
    async function loadUser(): Promise<void> {
      const res = await fetch(`https://fakestoreapi.com/users/${userId}`);
      const obj = await res.json();
      setUser(obj);
    }
    loadUser();
  }, [userId]);

  return (
    <div style={{ border: "solid black 2px", margin: "10px" }} key={user.id}>
      <div>Ник: {user.username}</div>
      <div>
        {" "}
        Name, last Name: {user.name.firstName} {user.name.lastName}
      </div>
      <div>Phone: {user.phone}</div>
      <div>E-mail: {user.email} </div>
      <div>zipcode: {user.address.zipcode} </div>
      <Link to="../userspage">To users list</Link>
    </div>
  );
}
