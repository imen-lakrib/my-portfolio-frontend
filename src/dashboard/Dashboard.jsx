import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';

import RecentActorsIcon from '@mui/icons-material/RecentActors';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'; 
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { useLocation } from 'react-router-dom'
import { Logout } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PersonIcon from '@mui/icons-material/Person';
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
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

const menu =[
  {title:"Home",
    icon: <HomeIcon />,
    link: "/dashboard/app"
  },
  {title:"blog",
    icon: <ConfirmationNumberIcon />,
    link: "/dashboard/BlogAdmin"
  },
  {title:"education",
    icon: <PersonIcon />,
    link: "/dashboard/EducationAdmin"
  },
  {title:"experiance",
    icon: <InsertChartIcon />,
    link: "/dashboard/ExperianceAdmin"
  },
  {title:"contact",
    icon: <LocalTaxiIcon />,
    link: "/dashboard/contactAdmin"
  },
  {title:"skill",
    icon: <RecentActorsIcon />,
    link: "/dashboard/skillAdmin"
  },
  {title:"project",
    icon: <RecentActorsIcon />,
    link: "/dashboard/projectAdmin"
  },
]
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const location = useLocation();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Drawer sx={{zIndex : 10000 }} variant="permanent" open={open}>
      
          {
            open ?<Box sx={{ m: 2, display:"flex", justifyContent:"space-between", alignItems: "center"}}> <img style={{width: "50%"}} ></img></Box>:
            <Box sx={{ m: 2, display:"flex", justifyContent:"space-between", alignItems: "center"}}><img style={{width: "120%"}} ></img></Box>
            }
        
        <List >
         
          
          {menu.map((e, index) => (
            <ListItem onClick={()=> {
              navigate(e.link)
            } } key={e} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor : location.pathname == e.link ? "red" : "white",
                  "&:hover": {
                    border: "1px solid red",
                    color: 'white',
                    backgroundColor: 'red'
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    color: location.pathname == e.link ? "white" : "red",
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    "&:hover": {
                      color: 'white',
                      
                    }
                  }}
                >
                  {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.title} sx={{ color: location.pathname == e.link ? "white" : "black" , opacity: open ? 1 : 0 }} >
                  
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
           <ListItem onClick={()=> {
              localStorage.removeItem("email")
              localStorage.removeItem("token")
              localStorage.removeItem("username")
              navigate("/login")
            }} key={99} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor :  "white",
                  "&:hover": {
                    border: "1px solid red",
                    color: 'white',
                    backgroundColor: 'red'
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    color:  "black", 
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Logout></Logout>
                
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ color:  "black" , opacity: open ? 1 : 0 }} >
                  
                </ListItemText>
              </ListItemButton>
            </ListItem>
        </List>
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet/>
        
      </Box>
    </Box>
  );
}