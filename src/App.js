import { useRef, useEffect, useState } from "react";
import Input from "../src/components/Input";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import { AiFillFacebook } from "react-icons/ai";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Loader from "./components/Loader";

function App() {
  const [redirect, setRedirect] = useState(false);

  // useEffect(() => {
  //   let timeout = setTimeout(() => {
  //     setRedirect(true);
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);
  const showRoutes = useRoutes(routes);
  const user = useSelector((state) => state.auth.user);
  if (user === null) {
    return <Loader />;
  }
  // if (!user && !redirect) {
  //   return <Loader />;
  // }
  return (
    <>
      <Toaster position="top-right" />
      {showRoutes}{" "}
    </>
  );
}

export default App;
