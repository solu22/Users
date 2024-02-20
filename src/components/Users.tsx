/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
import { User, UserArray } from "../types";


const Users:React.FC = () => {
  const users = useLoaderData() as UserArray;

  return (
    <div style={{alignItems:"center" , textAlign:'center', marginTop:"20px"}}>
      {users.map((user:User) => (
        <li key = {user.id} style={{listStyleType:'none'}}>
           <Link to={user.id.toString()}>
           {user.name}
     </Link>  
        </li>
     
        
      ))}
    </div>
  );
};

export default Users;

export const dataLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  return response.json();
};