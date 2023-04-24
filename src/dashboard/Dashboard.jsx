import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import HubIcon from '@mui/icons-material/Hub';
import ContactsIcon from '@mui/icons-material/Contacts';
import DvrIcon from '@mui/icons-material/Dvr';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { Logout } from '@mui/icons-material';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function DashBoard() {

  const menu = [
   
    {
      title: "blog",
      icon: <BookIcon />,
      link: "/dashboard/BlogAdmin"
    },
    {
      title: "education",
      icon: <SchoolIcon />,
      link: "/dashboard/EducationAdmin"
    },
    {
      title: "experiance",
      icon: <HubIcon />,
      link: "/dashboard/ExperianceAdmin"
    },
    {
      title: "contact",
      icon: <ContactsIcon />,
      link: "/dashboard/contactAdmin"
    },
    {
      title: "skill",
      icon: <DvrIcon />,
      link: "/dashboard/skillAdmin"
    },
    {
      title: "project",
      icon: <AccountTreeIcon />,
      link: "/dashboard/projectAdmin"
    },
  ]
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const location = useLocation();





  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer sx={{ zIndex: 10000 }} variant="permanent" >


        <Box sx={{ m: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}> <img style={{ width: "100%" }} src='./favicon/favicon.png' alt='test' ></img></Box>

        <List >


          {menu.map((e, index) => (
            <ListItem onClick={() => {
              navigate(e.link)
            }} key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor: location.pathname === e.link ? "#FFDF39" : "white",
                  "&:hover": {
                    border: "1px solid #FFDF39",
                    color: 'gray',
                    backgroundColor: '#FFDF39'
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    color: location.pathname === e.link ? "#FFDF39" : "#balck",
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    transition: 'color 0.3s ease-in-out',
                    "&:hover": {
                      color: 'gray',
                    },
                    "&.active": {
                      color: "gray"
                    }
                  }}
                  className={location.pathname === e.link ? "active" : ""}
                >
                  {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.title} sx={{ color: location.pathname === e.link ? "gray" : "black", opacity: open ? 1 : 0 }} >

                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem onClick={() => {
            localStorage.removeItem("email")
            localStorage.removeItem("token")
            navigate("/")
          }} key={99} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                backgroundColor: "gray",
                "&:hover": {
                  border: "1px solid #FFDF39",
                  color: 'gray',
                  backgroundColor: '#FFDF39'
                }
              }}
            >
              <ListItemIcon
                sx={{
                  color: "black",
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Logout></Logout>

              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ color: "black", opacity: open ? 1 : 0 }} >

              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />

      </Box>
    </Box>
  );
}