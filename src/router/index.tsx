import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Accordian from "../views/Accordian";
import Grid from "../views/Grid"
import Tabs from "../views/Tabs"
import TicTacToe from "../views/TicTacToe"

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
  },
  {
    path: "/tabs",
    element: <Tabs />,
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe />,
  }
]);
