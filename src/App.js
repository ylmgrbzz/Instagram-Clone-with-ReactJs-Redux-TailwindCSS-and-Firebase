import { useRef, useEffect, useState } from "react";
import Input from "../src/components/Input";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import { AiFillFacebook } from "react-icons/ai";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Loader from "./components/Loader";

function App() {
  const showRoutes = useRoutes(routes)
  const user = useSelector(state => state.auth.user)
  if (!user) {
    return <Loader />
  }
  return <>
    <Toaster position="top-right" />
    {showRoutes} </>

}

export default App;