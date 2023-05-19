import ChatIcon from "@mui/icons-material/Chat";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Data = [
  {
    title: "Call",
    description: "+972-56830355",
    icon: (
      <CallIcon sx={{ background: "grey", color: "#fff", borderRadius: 1 }} />
    ),
    buttonValue: "call now!",
  },
  {
    title: "Chat",
    description: "+972-56830355",
    icon: (
      <ChatIcon sx={{ background: "grey", color: "#fff", borderRadius: 1 }} />
    ),
    buttonValue: "chat now",
  },
  {
    title: "Email",
    description: "moderno@gmail.com",
    icon: (
      <EmailIcon sx={{ background: "grey", color: "#fff", borderRadius: 1 }} />
    ),
    buttonValue: "send now!",
  },
  {
    title: "location",
    description: "nablus alaqsa street",
    icon: (
      <LocationOnIcon
        sx={{ background: "grey", color: "#fff", borderRadius: 1 }}
      />
    ),
    buttonValue: "reach now!",
  },
];

export default Data;
