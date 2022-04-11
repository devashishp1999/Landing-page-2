import { SearchSharp } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import "./Navbar.css";
import DrawerComp from "../Drawer/DrawerComp";

const style = {
  btn: { ml: "1rem", color: "#fff" },
};

function Navbar() {
  //

  const navLinks = ["Home", "About Us", "Services", "Blog", "Contact Us"];

  const [value, setValue] = useState(0);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const navList = (
    <>
      <Tabs
        textColor="inherit"
        indicatorColor="primary"
        value={value}
        onChange={(e, val) => setValue(val)}
      >
        {navLinks.map((text, i) => (
          <Tab key={i} label={text} />
        ))}
      </Tabs>
      <SearchSharp color="primary" />

      {["Log In", "Get Started"].map((text, i) => (
        <Button
          onClick={() => navButtonHandler(i)}
          key={i}
          variant="contained"
          color="primary"
          sx={style.btn}
        >
          {text}
        </Button>
      ))}
    </>
  );
  const ham = <DrawerComp navLinks={navLinks} />;

  const navButtonHandler = (btn) => {
    console.log(!btn ? "Log In" : "Get Started");
  };

  return (
    <>
      <AppBar
        sx={{ background: "transparent", color: "black", position: "relative" }}
      >
        <Toolbar
          className="container"
          style={{
            padding: 0,
          }}
        >
          <Typography className="logo" sx={{ mr: "auto", fontWeight: 700 }}>
            LOGO
          </Typography>
          {!isMatch ? navList : ham}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
