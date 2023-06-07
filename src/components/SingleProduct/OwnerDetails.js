import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
function OwnerDetails(props) {
  const [openList, setOpenList] = useState(false);

  const handleClick = () => {
    setOpenList(!openList);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <Typography variant="h6" sx={{}} gutterBottom>
          owner Details :
        </Typography>
        {openList ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <EmailIcon sx={{mr:3,color:"#713A3A"}} /> <ListItemText primary={props.email} />
          </ListItemButton>{" "}
          <ListItemButton sx={{ pl: 4 }}>
            <LocationOnIcon sx={{mr:3,color:"#713A3A"}} />
            <ListItemText primary={props.address} />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
export default OwnerDetails;
