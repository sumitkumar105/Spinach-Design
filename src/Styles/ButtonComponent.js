import { theme } from "../Themes/Theme";
export const btnStyles = {
  width: "100px",
  color: theme.palette.secondary,
  borderColor: theme.palette.secondary,
  borderRadius: "50px",
  padding: "15px",
  fontSize: "8px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: theme.palette.secondary,
    color: theme.palette.primary,
  },
};
