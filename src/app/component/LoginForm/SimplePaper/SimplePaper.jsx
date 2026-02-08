import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputWithIcon from "../InputWithIcon/InputWithIcon"
const StylePapre = {
  Box: {
    display: "flex",
    width: "100%",
    height: "100vh",
     backgroundColor:"black"
  },
  AfterBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Responsive: {
    width: { xs: "400px", sm: "350px", md: "400px" },
    height: { xs: "400px", sm: "350px", md: "400px" },
    margin: "20px",
  },
  StyleLoginform: {
    fontSize: { xs: "30px", md: "40px" },
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
};
export default function SimplePaper() {
  return (
    <Box sx={StylePapre.Box}>
      <Box sx={StylePapre.AfterBox}>
        <Paper sx={StylePapre.Responsive}>
          <Typography sx={StylePapre.StyleLoginform}>Loginform</Typography>
          <InputWithIcon/>
        </Paper>
      </Box>
    </Box>
  );
}
