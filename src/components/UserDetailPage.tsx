/* eslint-disable react-refresh/only-export-components */

import { useLoaderData } from "react-router-dom";
import { User } from "../types";

const UserDetailPage: React.FC = () => {
  const userDetails = useLoaderData() as User;
  return (
    <div>
      <h2>User Detail</h2>
      {userDetails.username}
    </div>
  );
};
export default UserDetailPage;

export const userDetailLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  return response.json();
};
