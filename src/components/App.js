import React from "react";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WareHouseDetailsPage from "./WareHouseDetailsPage/WareHouseDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search/:id",
    element: <WareHouseDetailsPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
