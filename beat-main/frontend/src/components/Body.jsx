import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";
import Account from "./Account";
import ManageProfile from "./ManageProfile";
import HelpCenter from "./HelpCenter";
import { AuthContext } from "../context/AuthContext";
import VideoPlayer from "./VideoPlayer";
import ResetPassword from "./ResetPassword"; // Import the ResetPassword component

const Body = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout><Content component={isLoggedIn ? Browse : Login} /></MainLayout>,
    },
    {
      path: "/video",
      element: <MainLayout><Content component={isLoggedIn ? VideoPlayer : Login} /></MainLayout>,
    },
    {
      path: "/account",
      element: <MainLayout><Content component={isLoggedIn ? Account : Login} /></MainLayout>,
    },
    {
      path: "/manage-profile",
      element: <MainLayout><Content component={isLoggedIn ? ManageProfile : Login} /></MainLayout>,
    },
    {
      path: "/help-center",
      element: <MainLayout><Content component={isLoggedIn ? HelpCenter : Login} /></MainLayout>,
    },
    {
      path: "/reset-password/token",
      element: <MainLayout><ResetPassword /></MainLayout>,
    },
    {
      path: "*", // Catch-all route for undefined paths
      element: <MainLayout><div>404 Not Found</div></MainLayout>,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

const Content = ({ component: Component }) => <Component />;

export default Body;
