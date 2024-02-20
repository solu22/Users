import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Users from "./components/Users.tsx";
import UserDetailPage, {
  userDetailLoader,
} from "./components/UserDetailPage.tsx";
import { dataLoader } from "./components/Users.tsx";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Users />} loader={dataLoader}></Route>
        <Route
          path=":id"
          element={<UserDetailPage />}
          loader={userDetailLoader}
        />
      </>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
