import { useRef, useEffect, useState } from "react";
import Input from "../src/components/Input";
import { Toaster } from "react-hot-toast";

import { AiFillFacebook } from "react-icons/ai";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  return <>
    <Toaster position="top-right" />
    {useRoutes(routes)} </>

}

export default App;