import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

import profile from "./../Profiles/profile-pic.jpeg";
{
  /* <img src={tile.img} alt={tile.title} /> */
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function SellerProfile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className="seller-page">
      <div>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
          style={{
            borderRadius: "4px",
            backgroundColor: "rgba(0, 0, 0, 0.678)",
            color: "white"
          }}
        >
          <ListItem>
            <img
              src={profile}
              alt={"profilePic"}
              style={{ height: "5%", width: "100%" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </List>
      </div>
      <div
        style={{
          height: "90%",
          width: "60%",
          backgroundColor: "rgba(0, 0, 0, 0.521)",
          color: "white",
          borderRadius: "10px"
        }}
      >
        agdug aog
      </div>
    </div>
  );
}
