import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Accordian from "../views/Accordian";
import Grid from "../views/Grid"

export const router =  createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/accordian",
    element: <Accordian />,
  },
  {
    path: "/grid",
    element: <Grid />,
  }
]);
