import { styled } from "@mui/material/styles";
import { green, purple, red } from "@mui/material/colors";
import { theme } from "./styles";

export const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("mobile")]: {
    color: green[500]
  },
  [theme.breakpoints.up("tablet")]: {
    color: purple[500]
  },
  [theme.breakpoints.up("desktop")]: {
    color: red[500]
  }
}));