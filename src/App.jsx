import "./App.css";

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import SignUp from "./Components/Signup/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LandingPage />}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={ <DashboardPage />}/>
    </Route>
  )
);


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
