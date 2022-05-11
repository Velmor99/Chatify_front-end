import React, { Suspense } from "react";
import { Routes, useRoutes } from "react-router-dom";
//
import Layout from "./layout/Layout";
import ChatPage from "./pages/ChatPage/ChatPage";
import ChatListPage from "./pages/ChatLIstPage/ChatLIstPage";
import GroupsPage from "./pages/GroupsPage/GroupsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LoginRegisterPage from "./pages/Login-RegisterPage/Login-RegisterPage";
import "./app.scss";
//
// import TestComponent from "./components/TestComponent/SocketTest";
// import SagaTest from "./components/TestComponent/SagaTest";
//
// import { store } from "./redux/store";
// const action = (type) => store.dispatch({ type });


const App = () => {
  // let location = useLocation();
  let routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <ChatListPage /> },
        {
          path: "groups",
          element: <GroupsPage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "contacts",
          element: <ContactsPage />,
        },
      ],
    },
    {
      path: "chat/:id",
      element: <ChatPage />,
    },
    {
      path: "register",
      element: <LoginRegisterPage />,
    },
    {
      path: "login",
      element: <LoginRegisterPage />,
    },
  ];
  let element = useRoutes(routes);
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* <Routes>
          <Route></Route>
        </Routes> */}
        {element}
      </Suspense>
      {/* <TestComponent /> */}
    </>
  );
};

export default App;
