import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

function DrawerComp(props) {
  //
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {props.navLinks.map((link, i) => (
            <ListItemButton key={i} onClick={() => setOpenDrawer(false)}>
              <ListItemText>{link}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon color="primary" />
      </IconButton>
    </>
  );
}

export default DrawerComp;
