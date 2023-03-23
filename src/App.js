import { useRef, useEffect, useState } from "react";
import Input from "../src/components/Input";

import { AiFillFacebook } from "react-icons/ai";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  return useRoutes(routes)

}

export default App;