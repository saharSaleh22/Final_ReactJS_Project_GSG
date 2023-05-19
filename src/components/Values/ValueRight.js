import { React, useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import styles from "./styless.module.css";

import { Typography } from "@mui/material";
import Data from "./data";
import ValueContactTexts from "../VlaueContactTexts";
const ValueRight = () => {
  const [open, setOpen] = useState(true);
  const [openId, setOpenId] = useState(null);

  const handleClick = (id) => {
    if (openId === id) {
      setOpen(!open);
    } else {
      setOpenId(id);
      setOpen(true);
    }
  };
  return (
    <div className={styles.vRight}>
      <ValueContactTexts
        title="Our Values"
        subtitle="  Value we give to you"
        description1="We always ready to help by providing the best services for you."
        description2=" we beleive a good place to live can make your life better"
      />

      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Stack direction={"column"} spacing={3}>
          {Data.map((card, i) => (
            <>
              <ListItemButton onClick={() => handleClick(card.id)}>
                <ListItemIcon>{card.icon}</ListItemIcon>
                <ListItemText primary={card.title} />
                {open && openId === card.id ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}{" "}
              </ListItemButton>
              <Collapse
                in={open && openId === card.id}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon></ListItemIcon>
                    <Typography variant="subtitle2" gutterBottom>
                      {card.description}
                    </Typography>
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          ))}
        </Stack>
      </List>
    </div>
  );
};
export default ValueRight;
